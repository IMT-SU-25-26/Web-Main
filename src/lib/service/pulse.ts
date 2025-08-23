"use server";

import prisma from "../prisma";
import { revalidatePath } from "next/cache";
import { ActionResult } from "@/types/action";
import { Pulse, PulseSchema } from "@/types/service/pulse";

export async function getPulseInternshipApplications(): Promise<Pulse[]> {
  return await prisma.pulse.findMany({
    orderBy: { createdAt: "desc" },
  });
}

export async function getPulseApplicationById(
  id: string
): Promise<Pulse | null> {
  return await prisma.pulse.findUnique({
    where: { id },
  });
}

export async function getPulseApplicationByEmail(
  email: string
): Promise<Pulse | null> {
  return await prisma.pulse.findUnique({
    where: { email },
  });
}

export async function getPulseApplicationByNim(
  nim: string
): Promise<Pulse | null> {
  return await prisma.pulse.findUnique({
    where: { nim },
  });
}

export async function registerForPulseInternship(
  formData: FormData
): Promise<ActionResult<Pulse>> {
  try {
    const rawData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      nim: formData.get("nim") as string,
      major: formData.get("major") as string,
      phoneNumber: formData.get("phoneNumber") as string,
      lineId: formData.get("lineId") as string,
      idCard: formData.get("idCard") as string,
      idCardPublicId: formData.get("idCardPublicId") as string,
      cv: formData.get("cv") as string,
      cvPublicId: formData.get("cvPublicId") as string,
      reason: formData.get("reason") as string,
      commitmentLetter: formData.get("commitmentLetter") as string,
      commitmentLetterPublicId: formData.get("commitmentLetterPublicId") as string,
      firstChoice: formData.get("firstChoice") as string,
      secondChoice: formData.get("secondChoice") as string,
      portfolio: formData.get("portfolio") as string || null,
      portfolioPublicId: formData.get("portfolioPublicId") as string || null,
    };

    const validationResult = PulseSchema.safeParse(rawData);

    if (!validationResult.success) {
      const errors = validationResult.error.issues
        .map((err) => `${err.path.join(".")}: ${err.message}`)
        .join(", ");
      return {
        success: false,
        error: `Validation failed: ${errors}`,
      };
    }

    const validatedData = validationResult.data;

    const existingRegistration = await prisma.pulse.findUnique({
      where: { email: validatedData.email },
    });

    if (existingRegistration) {
      return {
        success: false,
        error: "Email already registered for Pulse internship.",
      };
    }

    const existingNimRegistration = await prisma.pulse.findUnique({
      where: { nim: validatedData.nim },
    });

    if (existingNimRegistration) {
      return {
        success: false,
        error: "NIM already registered for Pulse internship.",
      };
    }

    const pulseRegistration = await prisma.pulse.create({
      data: validatedData,
    });

    revalidatePath("/dashboard/pr/pulse");
    revalidatePath("/pulse");

    return {
      success: true,
      data: pulseRegistration,
      message: "Successfully registered for Pulse internship!",
    };
  } catch (error) {
    console.error("Failed to register for pulse internship:", error);
    return {
      success: false,
      error: "Failed to register for pulse internship. Please try again.",
    };
  }
}

export async function getPulseInternshipRegistrationsCount(): Promise<number> {
  try {
    const count = await prisma.pulse.count();
    return count;
  } catch (error) {
    console.error("Failed to get pulse internship registrations count:", error);
    return 0;
  }
}

export async function getPulseRegistrationsByDivision(
  division: string
): Promise<Pulse[]> {
  return await prisma.pulse.findMany({
    where: {
      OR: [{ firstChoice: division }, { secondChoice: division }],
    },
    orderBy: { createdAt: "desc" },
  });
}

export async function deletePulseApplication(
  id: string
): Promise<ActionResult<void>> {
  try {
    await prisma.pulse.delete({
      where: { id },
    });

    revalidatePath("/dashboard/pulse");
    revalidatePath("/pulse");

    return {
      success: true,
      message: "Pulse application deleted successfully!",
    };
  } catch (error) {
    console.error("Failed to delete pulse application:", error);
    return {
      success: false,
      error: "Failed to delete pulse application. Please try again.",
    };
  }
}
