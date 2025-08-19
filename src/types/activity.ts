import z from "zod";
import { FormProps } from "./action";
import { CategoryActivity } from "@prisma/client";

export interface Activity {
  id: string;
  title: string;
  description: string;
  location: string;
  quota: number;
  imageUrl: string | null;
  imagePublicId: string | null;
  createdAt: Date;
  updatedAt: Date;
  category: CategoryActivity;
}

export interface ActivityData {
  title: string;
  description: string;
  location: string;
  quota: number;
}

export const ActivitySchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(100, "Title must be less than 100 characters"),

  description: z
    .string()
    .min(1, "Description is required")
    .max(500, "Description must be less than 500 characters"),

  location: z
    .string()
    .min(1, "Location is required")
    .max(100, "Location must be less than 100 characters"),

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
});

export type ActivityInput = z.infer<typeof ActivitySchema>;

export type ActivityFormProps = FormProps<Activity>;