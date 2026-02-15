"use client";

import { signUpAction } from "@/actions/auth.actions";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";

const initialState = {
  success: false,
  errors: [],
};

function SignUpForm() {
  const [state, formAction, pending] = useActionState(
    signUpAction,
    initialState,
  );
  const router = useRouter();

  useEffect(() => {
    if (state.success) {
      router.push("/admin");
    }
  }, [router, state.success]);

  return (
    <form action={formAction}>
      <input type="text" name="username" placeholder="Username" required />
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />
      {state?.errors &&
        state.errors.map((err) => (
          <p key={err.path} className="text-red-700">
            {err.message}
          </p>
        ))}

      <button className="btn-primary" disabled={pending}>
        SIGN UP
      </button>
    </form>
  );
}

export default SignUpForm;
