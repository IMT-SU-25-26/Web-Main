import { z } from "zod";
import { FormProps } from "../action";
import { Type, Level } from "@prisma/client";

export interface Competition {
  id: string;
  name: string;
  organizer: string;
  description: string;
  category: string;
  information: string;
  imageUrl: string | null;
  imagePublicId: string | null;
  type: Type;
  level: Level;
  endDate: Date;
  startDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface CompetitionData {
  name: string;
  organizer: string;
  description: string;
  category: string;
  information: string;
  imageUrl: string | null;
  imagePublicId: string | null;
  type: Type;
  level: Level;
  endDate: Date;
  startDate: Date;
}

export const CompetitionSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(100, "Name must be less than 100 characters"),

  organizer: z
    .string()
    .min(1, "Organizer is required")
    .max(100, "Organizer must be less than 100 characters"),

  description: z
    .string()
    .min(1, "Description is required")
    .max(10000, "Description must be less than 10000 characters"),

  category: z
    .string()
    .min(1, "Category is required")
    .max(50, "Category must be less than 50 characters"),

  information: z
    .string()
    .min(1, "Information is required")
    .max(5000, "Information must be less than 5000 characters"),

  type: z.nativeEnum(Type, {
    message: "Please select a valid type",
  }),

  level: z.nativeEnum(Level, {
    message: "Please select a valid level",
  }),

  startDate: z.coerce.date({
    message: "Please provide a valid start date",
  }),

  endDate: z.coerce.date({
    message: "Please provide a valid end date",
  }),

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
}).refine((data) => data.endDate > data.startDate, {
  message: "End date must be after start date",
  path: ["endDate"],
});

export type CompetitionInput = z.infer<typeof CompetitionSchema>;

export type CompetitionFormProps = FormProps<Competition>;
