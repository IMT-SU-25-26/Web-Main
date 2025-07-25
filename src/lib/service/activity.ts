"use server";

import prisma from "../prisma";
import { revalidatePath } from "next/cache";
import { ActionResult } from "@/types/action";
import { Activity, ActivityData, ActivitySchema } from "@/types/activity";

export async function getActivities(): Promise<Activity[]> {
  return await prisma.activity.findMany({
    orderBy: { createdAt: "desc" },
  });
}

export async function getActivityById(id: string): Promise<Activity | null> {
  return await prisma.activity.findUnique({
    where: { id },
  });
}

export async function createActivity(
  formData: FormData
): Promise<ActionResult<Activity>> {
  try {
    const rawData = {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      location: formData.get("location") as string,
      quota: parseInt(formData.get("quota") as string, 10) || 0,
    };

    const validationResult = ActivitySchema.safeParse(rawData);

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

    const activity = await prisma.activity.create({
      data: validatedData,
    });

    revalidatePath("/dashboard/sa");

    return {
      success: true,
      data: activity,
      message: "Activity created successfully!",
    };
  } catch (error) {
    console.error("Failed to create activity:", error);
    return {
      success: false,
      error: "Failed to create activity. Please try again.",
    };
  }
}

export async function editActivity(
  id: string,
  formData: FormData
): Promise<ActionResult<ActivityData>> {
  try {
    const rawData = {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      location: formData.get("location") as string,
      quota: parseInt(formData.get("quota") as string, 10) || 0,
    };

    const validationResult = ActivitySchema.safeParse(rawData);

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

    const activity = await prisma.activity.update({
      where: { id },
      data: validatedData,
    });

    revalidatePath("/dashboard/sa");

    return {
      success: true,
      data: activity,
      message: "Activity updated successfully!",
    };
  } catch (error) {
    console.error("Failed to edit activity:", error);
    return {
      success: false,
      error: "Failed to edit activity. Please try again.",
    };
  }
}

export async function deleteActivity(id: string) {
  try {
    await prisma.activity.delete({
      where: { id },
    });

    revalidatePath("/dashboard/sa");
  } catch (error) {
    console.error("Failed to delete activity:", error);
    throw new Error("Failed to delete activity. Please try again.");
  }
}
