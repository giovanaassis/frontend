"use server";

import { sessions } from "@/database";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const verifySession = async () => {
  try {
    const cookieStore = await cookies();
    const cookieSessionId = cookieStore.get("sessionId")?.value;

    if (!cookieSessionId) {
      return false;
    }

    const session = sessions.some(
      (s) => s.id === cookieSessionId && s.expiresAt > new Date(),
    );

    if (!session) {
      return false;
    }

    return true;
  } catch (error) {
    console.log(error);
  }
};

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
