import { signUpAction } from "@/actions/auth.actions";

function SignUpForm() {
  return (
    <form action={signUpAction}>
      <input type="text" name="username" placeholder="Username" required />
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />

      <button className="btn-primary">SIGN UP</button>
    </form>
  );
}

export default SignUpForm;
