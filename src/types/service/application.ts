import z from "zod";
import { Status } from "@prisma/client";
import { FormProps } from "../action";

export interface Application {
  id: string;
  userId: string;
  activityId: string;
  status: Status;
  createdAt: Date;
  updatedAt: Date;
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