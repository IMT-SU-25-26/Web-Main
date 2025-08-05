import z from "zod";
import { FormProps } from "./action";

export interface Competition {
  id: string;
  name: string;
  description: string;
  imageUrl: string | null;
  imagePublicId: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface CompetitionData {
  name: string;
  description: string;
  imageUrl: string | null;
  imagePublicId: string | null;
}

export const CompetitionSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(100, "Name must be less than 100 characters"),

  description: z
    .string()
    .min(1, "Description is required")
    .max(500, "Description must be less than 500 characters"),

  teamSize: z
    .number()
    .min(1, "Team size must be at least 1")
    .max(1000, "Team size cannot exceed 1000")
    .int("Team size must be a whole number"),

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

export type CompetitionInput = z.infer<typeof CompetitionSchema>;

export type CompetitionFormProps = FormProps<Competition>;
