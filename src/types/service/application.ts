import { z } from "zod";
import { Status } from "@prisma/client";
import { FormProps } from "../action";
import { SearchableItem } from "../dashboard";

export interface Application {
  id: string;
  userId: string;
  activityId: string | null;
  competitionId: string | null;
  status: Status;
  createdAt: Date;
  updatedAt: Date;
}

export interface ApplicationWithDetails extends SearchableItem {
  id: string;
  status: Status;
  createdAt: Date;
  updatedAt: Date;
  user: {
    id: string;
    name: string | null;
    email: string | null;
    phoneNumber: string | null;
    nim: string | null;
  };
  activity: {
    id: string;
    title: string;
    quota: number;
  } | null;
  competition: {
    id: string;
    name: string;
  } | null;
  // Required by SearchableItem interface
  title: string; // Will be computed from user name
  name?: string; // Optional fallback
}

export interface ApplicationData {
  userId: string;
  activityId: string;
  status: Status;
}

export const ApplicationSchema = z.object({
  userId: z.string().min(1, "User ID is required"),
  activityId: z.string().min(1, "Activity ID is required"),
  status: z.enum(Object.values(Status) as [string, ...string[]], {
    message: "Invalid status",
  }),
});

export type ApplicationInput = z.infer<typeof ApplicationSchema>;

export type ApplicationFormProps = FormProps<Application>;
