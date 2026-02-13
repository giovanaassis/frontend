"use server";

import { users } from "@/database";

export const signInAction = async (formData: FormData) => {
  try {
    console.log("logging...")
  } catch (error) {
    console.log(error);
  }
};

export const signUpAction = async (formData: FormData) => {
  try {
    const newUser: User = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    users.push(newUser);

    console.log("users", users);
  } catch (error) {
    console.log(error);
  }
};