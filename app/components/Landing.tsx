import Link from "next/link";

export default function Landing() {
  return (
    <div className="flex items-center">
      <div>
        <Link className="text-[40px] font-semibold" href="/blog/1">
          ITHS Blog Project
        </Link>
      </div>
    </div>
  );
}
