"use client";

import CustomIcon from "@/components/CustomIcon";
import SignInForm from "@/components/forms/SignInForm";
import SignUpForm from "@/components/forms/SignUpForm";
import Silk from "@/components/Silk";
import { useState } from "react";

// export const revalidate = 0;

export default function Home() {
  const [isSignup, setIsSignup] = useState<boolean>(false);

  const switchFormMode = () => {
    setIsSignup((prev) => !prev);
    console.log(isSignup);
  };

  // return (
  //   <div className={`bg-black min-h-screen flex items-center justify-center`}>
  //     {/* CONTAINER */}
  //     <div className="bg-green-600 w-250 h-[70vh] flex overflow-hidden">
  //       <section
  //         className={`bg-red-700 flex-1 h-full transition ease-in-out duration-500 ${isSignup && "translate-x-[333px]"}`}
  //       >
  //         <button onClick={switchFormMode}>SWITCH</button>{" "}
  //       </section>
  //       <section
  //         className={`bg-blue-700 w-1/3 h-full transition ease-in-out duration-500 ${isSignup && "-translate-x-[667px]"}`}
  //       ></section>
  //     </div>
  //   </div>
  // );

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className={`flex shadow-lg w-250 min-h-125 overflow-hidden rounded-2xl`}>
        {/* FORM SECTION */}
        <section
          className="p-10 flex flex-col items-center gap-5 flex-1
        "
        >
          <h1>{isSignup ? "Create Account" : "Sign In"}</h1>
          <div className="flex justify-around gap-3">
            <CustomIcon src="/assets/icons/facebook.svg" alt="facebook" />
            <CustomIcon src="/assets/icons/google.svg" alt="google" />
            <CustomIcon src="/assets/icons/linkedin.svg" alt="linkedin" />
          </div>
          <span className="text-sm text-gray-500">
            or use your email account
          </span>
          {isSignup ? <SignUpForm /> : <SignInForm />}
        </section>

        {/* BACKGROUND SECTION */}
        <section className="relative w-1/3">
          <div className="absolute inset-0 -z-10">
            <Silk color="#ffc300" />
          </div>

          <div className="text-white flex flex-col items-center justify-center w-full h-full gap-2">
            {isSignup ? (
              <>
                <h1>Welcome Back!</h1>
                <p className="font-medium text-center">
                  To keep connected with us, please log in with your personal
                  info
                </p>
                <button className="btn-secondary" onClick={switchFormMode}>
                  SIGN IN
                </button>
              </>
            ) : (
              <>
                <h1>Hello, Friend!</h1>
                <p className="font-medium text-center">
                  Enter your personal details and start your journey with us
                </p>
                <button className="btn-secondary" onClick={switchFormMode}>
                  SIGN UP
                </button>
              </>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
