"use server";

import prisma from "../prisma";
import { Status } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { ActionResult } from "@/types/action";
import { Application, ApplicationSchema } from "@/types/application";

export async function getApplications(): Promise<Application[]> {
  return await prisma.application.findMany({
    orderBy: { createdAt: "desc" },
  });
}

export async function getApplicationsByUserId(
  userId: string
): Promise<Application[]> {
  return await prisma.application.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
  });
}

export async function getApplicationsByActivityId(
  activityId: string
): Promise<Application[]> {
  return await prisma.application.findMany({
    where: { activityId },
    orderBy: { createdAt: "desc" },
  });
}

export async function getStatusApplication(
  activityId: string,
  userId: string
): Promise<string | undefined> {
  const applications = await getApplicationsByActivityId(activityId);
  const userApplications = applications.find((app) => app.userId === userId);
  return userApplications?.status || undefined;
}

export async function setStatusApplication(
  id: string,
  status: Status
): Promise<ActionResult<Application>> {
  try {
    const application = await prisma.application.update({
      where: { id },
      data: { status },
    });

    revalidatePath("/dashboard/sa");
    revalidatePath("/activities");

    return {
      success: true,
      data: application,
      message: "Application status updated successfully!",
    };
  } catch (error) {
    console.error("Error updating application status:", error);
    return {
      success: false,
      error: "An error occurred while updating the application status.",
    };
  }
}

export async function getAmountApprovedApplication(
  activityId: string){
  const applications = await getApplicationsByActivityId(activityId);
  const approvedApplications = applications.filter(
    (app) => app.status === "APPROVED"
  );
  return approvedApplications.length;
}

export async function createApplication(
  userId: string,
  activityId: string
): Promise<ActionResult<Application>> {
  try {
    // Step 1: check existing applications
    const existingApplications = await getApplicationsByUserId(userId);
    const alreadyApplied = existingApplications.some(
      (app) => app.activityId === activityId
    );

    if (alreadyApplied) {
      return {
        success: false,
        error: "You have already applied for this activity.",
      };
    }

    // Step 2: validate data
    const rawData = {
      userId,
      activityId,
      status: "PENDING" as const,
    };

    const validationResult = ApplicationSchema.safeParse(rawData);

    if (!validationResult.success) {
      const errors = validationResult.error.issues
        .map((err) => `${err.path.join(".")}: ${err.message}`)
        .join(", ");
      return {
        success: false,
        error: `Validation failed: ${errors}`,
      };
    }

    const validatedData = validationResult.data;

    // Step 3: create application
    const application = await prisma.application.create({
      data: {
        userId: validatedData.userId,
        activityId: validatedData.activityId,
        status: validatedData.status as Status,
      },
    });

    revalidatePath("/dashboard/sa");
    revalidatePath("/activities");

    return {
      success: true,
      data: application,
      message: "Application submitted successfully!",
    };
  } catch (error) {
    console.error("Error creating application:", error);
    return {
      success: false,
      error: "An error occurred while submitting your application.",
    };
  }
}


export async function deleteApplication(
  id: string
): Promise<ActionResult<Application>> {
  try {
    const application = await prisma.application.delete({
      where: { id },
    });

    revalidatePath("/dashboard/sa");
    revalidatePath("/activities");

    return {
      success: true,
      data: application,
      message: "Application deleted successfully!",
    };
  } catch (error) {
    console.error("Error deleting application:", error);
    return {
      success: false,
      error: "An error occurred while deleting the application.",
    };
  }
}

