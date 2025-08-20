'use server'

import prisma from "../prisma";
import { revalidatePath } from "next/cache";
import { ActionResult } from "@/types/action";
import { CategoryActivity } from "@prisma/client";


export async function getCategoriesActivity(){
  try {
    const categories = await prisma.categoryActivity.findMany({
      orderBy: { name: "asc" },
    });
    return categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw new Error("An error occurred while fetching categories.");
  }
}

export async function getCategoryActivityById(
  id: number
): Promise<ActionResult<CategoryActivity>> {
  try {
    const category = await prisma.categoryActivity.findUnique({
      where: { id },
    });

    if (!category) {
      return {
        success: false,
        error: "Category not found.",
      };
    }

    return {
      success: true,
      data: category,
    };
  } catch (error) {
    console.error("Error fetching category:", error);
    return {
      success: false,
      error: "An error occurred while fetching the category.",
    };
  }
}

export async function createCategoryActivity(
  name: string
): Promise<ActionResult<void>> {
  try {
    await prisma.categoryActivity.create({
      data: { name },
    });

    revalidatePath("/dashboard/sa");
    revalidatePath("/activities");

    return {
      success: true,
      message: "Category created successfully!",
    };
  } catch (error) {
    console.error("Error creating category:", error);
    return {
      success: false,
      error: "An error occurred while creating the category.",
    };
  }
}



export async function editCategoryActivity(
  id: number,
  name: string
): Promise<ActionResult<void>> {
  try {
    await prisma.categoryActivity.update({
      where: { id },
      data: { name },
    });

    revalidatePath("/dashboard/sa");
    revalidatePath("/activities");

    return {
      success: true,
      message: "Category updated successfully!",
    };
  } catch (error) {
    console.error("Error updating category:", error);
    return {
      success: false,
      error: "An error occurred while updating the category.",
    };
  }
}

export async function deleteCategoryActivity(
  id: number
): Promise<ActionResult<void>> {
  try {
    await prisma.categoryActivity.delete({
      where: { id },
    });

    revalidatePath("/dashboard/sa");
    revalidatePath("/activities");

    return {
      success: true,
      message: "Category deleted successfully!",
    };
  } catch (error) {
    console.error("Error deleting category:", error);
    return {
      success: false,
      error: "An error occurred while deleting the category.",
    };
  }
}