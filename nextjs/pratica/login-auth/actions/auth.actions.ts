/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { users } from "@/database";
import { SignupFormSchema } from "@/lib/validation";

export const signInAction = async (formData: FormData) => {
  try {
    console.log("logging...", formData);
  } catch (error) {
    console.log(error);
  }
};

export const signUpAction = async (prevState: any, formData: FormData) => {
  try {
    // 1 - VALIDATE DATA
    const validation = SignupFormSchema.safeParse({
      username: formData.get("username") as string,
      email: formData.get("email") as string,
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
    users
    // 3 - HASH PASSWORD
    // 4 - CREATE USER ON DATABASE
    // 5 - CREATE SESSION ON DATABASE
    // 6 - SEND THE SESSION ON COOKIE
  } catch (error) {
    console.log(error);
  }
};
