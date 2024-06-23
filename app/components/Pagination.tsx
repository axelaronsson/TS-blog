import Link from "next/link";
export default function Pagination() {
  return (
    <div className="mt-5">
      <Link className="border rounded m-5 p-2" href={"/blog/1/"}>
        1
      </Link>
      <Link className="border rounded m-5 p-2" href={"/blog/2/"}>
        2
      </Link>
      <Link className="border rounded m-5 p-2" href={"/blog/3/"}>
        3
      </Link>
    </div>
  );
}
