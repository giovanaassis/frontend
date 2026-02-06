function SignInForm() {
  return (
    <form action="">
      <input type="email" placeholder="Email" required />
      <input type="text" placeholder="Password" required />

      <span className="forgot-password">Forgot your password?</span>
      <button className="btn-primary">SIGN IN</button>
    </form>
  );
}

export default SignInForm;
