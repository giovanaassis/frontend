import z from "zod";

export const SignupFormSchema = z.object({
  username: z
    .string()
    .min(3, "Username should be at least 3 characters.")
    .max(60, "Username should be less than 60 characters."),
  email: z.email("Invalid email."),
  password: z
    .string()
    .min(6, "Password should be at least 6 characters.")
    .refine(
      (pw) =>
        /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*-])/.test(pw),
      "Invalid password.",
    ),
});
