import { signInAction } from "@/actions/auth.actions";

function SignInForm() {
  return (
    <form action={signInAction}>
      <input type="email" name="email" placeholder="Email" required />
      <input type="text" name="password" placeholder="Password" required />

      <span className="forgot-password">Forgot your password?</span>
      <button className="btn-primary">SIGN IN</button>
    </form>
  );
}

export default SignInForm;
