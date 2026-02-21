/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { sessions, users } from "@/database";
import { SignupFormSchema } from "@/lib/validation";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";

export const signInAction = async (formData: FormData) => {
  try {
    console.log("logging...", formData);
  } catch (error) {
    console.log(error);
  }
};

export const signUpAction = async (
  prevState: any,
  formData: FormData,
): Promise<{
  success: boolean;
  errors?: CustomErrors[];
}> => {
  try {
    // 1 - VALIDATE DATA
    const email = formData.get("email")?.toString().toLowerCase().trim() || "";

    const validation = SignupFormSchema.safeParse({
      username: formData.get("username") as string,
      email,
      password: formData.get("password") as string,
    });

    if (validation.error) {
      const errors: CustomErrors[] = validation.error.issues.map((iss) => {
        return {
          path: iss.path[0] as string,
          message: iss.message,
        };
      });

      return { success: false, errors };
    }

    // 2 - VERIFY IF USER EXISTS
    const existingUser = users.some((user) => user.email === email);

    if (existingUser) {
      return {
        success: false,
        errors: [{ path: "email", message: "User already exists." }],
      };
    }

    // 3 - HASH PASSWORD
    const hashedPassword = await bcrypt.hash(
      formData.get("password") as string,
      10,
    );
    // 4 - CREATE USER ON DATABASE
    const userId = crypto.randomUUID();

    users.push({
      id: userId,
      email,
      password: hashedPassword,
      username: formData.get("username") as string,
    });

    console.log("newUsers", users);
    // 5 - CREATE SESSION ON DATABASE
    const sessionDuration = 1000 * 60 * 60 * 24 * 7; // 7 days

    const session = {
      id: crypto.randomUUID(),
      userId: userId,
      expiresAt: new Date(Date.now() + sessionDuration),
      createdAt: new Date(),
    };
    sessions.push(session);

    // 6 - SET THE SESSION ON COOKIE
    const cookieStore = await cookies();
    cookieStore.set("sessionId", session.id, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      expires: new Date(Date.now() + sessionDuration),
    });

    console.log("sessions", sessions);

    return { success: true };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      errors: [{ path: "error", message: "An error occurred during signup." }],
    };
  }
};
