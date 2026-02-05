import CustomIcon from "@/components/CustomIcon";

export const revalidate = 0;

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex shadow-2xl">
        {/* FORM SECTION */}
        <section className="p-10">
          <h1>Sign In</h1>
          <div className="flex justify-around">
            <CustomIcon src="/assets/icons/facebook.svg" alt="facebook" />
            <CustomIcon src="/assets/icons/google.svg" alt="google" />
            <CustomIcon src="/assets/icons/linkedin.svg" alt="linkedin" />
          </div>
        </section>

        {/* BACKGROUND SECTION */}
        <section className="bg-yellow text-white p-10">
          <h1>Hello, Friend!</h1>
        </section>
      </div>
    </div>
  );
}
