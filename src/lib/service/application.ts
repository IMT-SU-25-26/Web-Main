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

export async function createApplication(
  userId: string,
  activityId: string
): Promise<ActionResult<Application>> {
  try {
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
