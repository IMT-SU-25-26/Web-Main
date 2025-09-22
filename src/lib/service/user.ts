"use server";

import prisma from "../prisma";
import { revalidatePath } from "next/cache";
import { ActionResult } from "@/types/action";
import { User, UserData, UserSchema } from "@/types/service/user";
import { Role } from "@prisma/client";

export async function getUsers(): Promise<User[]> {
  return await prisma.user.findMany({
    orderBy: { createdAt: "desc" },
  });
}

export async function getUserById(id: string): Promise<User | null> {
  return await prisma.user.findUnique({
    where: { id },
  });
}

export async function editUser(
  id: string,
  role: Role
): Promise<ActionResult<UserData>> {
  try {
    await prisma.user.update({
      where: { id },
      data: { role },
    });

    revalidatePath("/dashboard/tech");
    return { success: true };
  } catch (error) {
    console.error("Failed to update user role:", error);
    return {
      success: false,
      error: "Failed to update user role. Please try again.",
    };
  }
}

export async function deleteUser(id: string) {
  try {
    await prisma.user.delete({
      where: { id },
    });

    revalidatePath("/dashboard/tech");
  } catch (error) {
    console.error("Failed to delete user:", error);
    throw new Error("Failed to delete user. Please try again.");
  }
}

export async function updateUser(
  id: string,
  formData: FormData
): Promise<ActionResult<User>> {
  try {
    const rawData = {
      nim: formData.get("nim") as string,
      phoneNumber: formData.get("phoneNumber") as string,
    };

    const validationResult = UserSchema.safeParse(rawData);

    if (!validationResult.success) {
      const errors = validationResult.error.issues
        .map((err) => `${err.message}`)
        .join(", ");
      return {
        success: false,
        error: `${errors}`,
      };
    }

    const validatedData = validationResult.data;
    
    const updateData: { nim?: string | null; phoneNumber?: string | null } = {};
    if (validatedData.nim !== undefined) {
      updateData.nim = validatedData.nim;
    }
    if (validatedData.phoneNumber !== undefined) {
      updateData.phoneNumber = validatedData.phoneNumber;
    }

    const user = await prisma.user.update({
      where: { id },
      data: updateData,
    });

    revalidatePath("/dashboard/student");

    return {
      success: true,
      data: user,
      message: "Profile updated successfully!",
    };
  } catch (error) {
    console.error("Failed to update user:", error);
    return {
      success: false,
      error: "Failed to update profile. Please try again.",
    };
  }
}
