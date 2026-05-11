import Link from "next/link";

export const revalidate = 0;

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center gap-20 p-20 text-white bg-gray-900 tracking-[.20em]">
      <p>
        This is a bunch of little layouts to practice Grid CSS. All taken from
        Bento Grids.
      </p>

      <div className="flex gap-10 flex-wrap items-center justify-center">
        <Link href="/givingli" className="card">
          <span>Givingli</span>
        </Link>
        <Link href="/apple" className="card">
          <span>Apple</span>
        </Link>
        <Link href="/technexus" className="card">
          <span>Technexus</span>
        </Link>
      </div>

      <p className="mt-30">@giovanaassis</p>
    </div>
  );
}
