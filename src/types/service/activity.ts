import { z } from "zod";
import { Category } from "@prisma/client";
import { FormProps } from "../action";

export interface Activity {
  id: string;
  title: string;
  description: string;
  location: string;
  generation: string | null;
  startDate: Date;
  creditPoint: number;
  quota: number;
  imageUrl: string | null;
  imagePublicId: string | null;
  category: Category;
  createdAt: Date;
  updatedAt: Date;
}

export interface ActivityData {
  title: string;
  description: string;
  location: string;
  generation: string | null;
  startDate: Date;
  creditPoint: number;
  quota: number;
  category: Category;
}

export const ActivitySchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(100, "Title must be less than 100 characters"),

  description: z
    .string()
    .min(1, "Description is required")
    .max(10000, "Description must be less than 10000 characters"),

  location: z
    .string()
    .min(1, "Location is required")
    .max(100, "Location must be less than 100 characters"),

  generation: z
    .string()
    .nullable()
    .optional()
    .transform((val) => val || null)
    .refine((val) => val === null || /^\d{4}$/.test(val), {
      message: "Generation must be a 4-digit year or null",
    }),

  startDate: z.date({
    message: "Start date must be a valid date",
  }),

  creditPoint: z
    .number()
    .min(1, "Credit point must be at least 1")
    .max(10, "Credit point cannot exceed 10")
    .int("Credit point must be a whole number"),

  quota: z
    .number()
    .min(1, "Quota must be at least 1")
    .max(1000, "Quota cannot exceed 1000")
    .int("Quota must be a whole number"),

  imageUrl: z
    .string()
    .nullable()
    .optional()
    .transform((val) => val || null),

  imagePublicId: z
    .string()
    .nullable()
    .optional()
    .transform((val) => val || null),

  category: z.nativeEnum(Category, {
    message: "Category must be either ACTIVITY or RESEARCH",
  }),
});

export type ActivityInput = z.infer<typeof ActivitySchema>;

export interface ActivityFormProps extends FormProps<Activity> {
  categories: Category[];
}
