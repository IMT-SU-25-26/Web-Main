import { z } from "zod";
import { Role } from "@prisma/client";

export interface User {
  id: string;
  name: string | null;
  email: string | null;
  nim: string | null;
  image: string | null;
  phoneNumber: string | null;
  role: Role;
  emailVerified?: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserData {
  name: string | null;
  email: string | null;
  nim: string | null;
  image: string | null;
  phoneNumber: string | null;
  role: Role;
  emailVerified?: Date | null;
  createdAt?: Date;
  updatedAt?: Date;
}

export const UserSchema = z.object({
  nim: z
    .union([
      z
        .string()
        .min(13, "NIM must be 13 characters")
        .max(13, "NIM must be 13 characters")
        .regex(/^[0-9]+$/, "NIM must contain only numbers"),
      z.null(),
      z.literal("").transform(() => null),
    ])
    .optional(),

  phoneNumber: z
    .union([
      z
        .string()
        .min(1, "Phone number cannot be empty if provided")
        .max(15, "Phone number must be less than 15 characters")
        .regex(
          /^[+]?[0-9\s\-()]+$/,
          "Phone number must contain only valid characters"
        ),
      z.null(),
      z.literal("").transform(() => null),
    ])
    .optional(),
});
