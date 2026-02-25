"use server";

import { sessions } from "@/database";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const deleteSession = async () => {
  try {
    const cookieStore = await cookies();
    const cookieSessionId = cookieStore.get("sessionId")?.value;

    sessions.filter((session) => session.id !== cookieSessionId);

    cookieStore.delete("sessionId");

    console.log("updated sessions", sessions);
  } catch (error) {
    console.log(error);
  }

  redirect("/");
};

export const verifySession = async () => {
  try {
  } catch (error) {
    console.log(error);
  }
};
