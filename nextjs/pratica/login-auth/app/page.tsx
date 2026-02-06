import CustomIcon from "@/components/CustomIcon";
import SignInForm from "@/components/forms/SignInForm";

export const revalidate = 0;

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex shadow-2xl">
        {/* FORM SECTION */}
        <section className="p-10 flex flex-col items-center gap-5">
          <h1>Sign in</h1>
          <div className="flex justify-around gap-3">
            <CustomIcon src="/assets/icons/facebook.svg" alt="facebook" />
            <CustomIcon src="/assets/icons/google.svg" alt="google" />
            <CustomIcon src="/assets/icons/linkedin.svg" alt="linkedin" />
          </div>
          <span className="text-sm text-gray-500">or use your email account</span>
          <SignInForm />
        </section>

        {/* BACKGROUND SECTION */}
        <section className="bg-yellow text-white p-10">
          <h1>Hello, Friend!</h1>
        </section>
      </div>
    </div>
  );
}
