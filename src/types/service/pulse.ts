import z from "zod";
import { FormProps } from "../action";

export interface Pulse {
  id: string;
  name: string;
  email: string;
  nim: string;
  major: string;
  phoneNumber: string;
  lineId: string;
  idCard: string;
  idCardPublicId: string;
  cv: string;
  cvPublicId: string;
  reason: string;
  commitmentLetter: string;
  commitmentLetterPublicId: string;
  firstChoice: string;
  secondChoice: string;
  portfolio: string | null;
  portfolioPublicId: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export const PulseSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(100, "Name must be less than 100 characters"),

  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .max(100, "Email must be less than 100 characters"),

  nim: z
    .string()
    .min(1, "NIM is required")
    .max(20, "NIM must be less than 20 characters")
    .regex(/^[0-9]+$/, "NIM must contain only numbers"),

  major: z
    .string()
    .min(1, "Major is required")
    .max(100, "Major must be less than 100 characters"),

  phoneNumber: z
    .string()
    .min(1, "Phone number is required")
    .max(20, "Phone number must be less than 20 characters")
    .regex(/^[0-9+\-\s()]+$/, "Please enter a valid phone number"),

  lineId: z
    .string()
    .min(1, "LINE ID is required")
    .max(50, "LINE ID must be less than 50 characters"),

  idCard: z
    .string()
    .min(1, "ID Card is required")
    .url("ID Card must be a valid URL"),

  idCardPublicId: z
    .string()
    .min(1, "ID Card public ID is required"),

  cv: z.string().min(1, "CV is required").url("CV must be a valid URL"),

  cvPublicId: z
    .string()
    .min(1, "CV public ID is required"),

  reason: z
    .string()
    .min(1, "Reason is required")
    .max(5000, "Reason must be less than 5000 characters"),

  commitmentLetter: z
    .string()
    .min(1, "Commitment letter is required")
    .url("Commitment letter must be a valid URL"),

  commitmentLetterPublicId: z
    .string()
    .min(1, "Commitment letter public ID is required"),

  firstChoice: z
    .string()
    .min(1, "First choice is required")
    .max(100, "First choice must be less than 100 characters"),

  secondChoice: z
    .string()
    .min(1, "Second choice is required")
    .max(100, "Second choice must be less than 100 characters"),

  portfolio: z
    .string()
    .url("Portfolio must be a valid URL")
    .nullable()
    .optional()
    .transform((val) => (!val || val.trim() === "") ? null : val),

  portfolioPublicId: z
    .string()
    .nullable()
    .optional()
    .transform((val) => (!val || val.trim() === "") ? null : val),
});

export type PulseInput = z.infer<typeof PulseSchema>;

export type PulseFormProps = FormProps<Pulse>;
