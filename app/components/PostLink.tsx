import Image from "next/image";
import Link from "next/link";
type Post = {
    id:number,
    title:string,
    body:string,
    tags:[],
    reactions:{},
    views:number,
    userId:number
}
export default function PostLink(props:{post:Post}) {


  return (
    <Link href="/article" className="group rounded-lg border border-transparent mx-5 my-5 px-5 py-4 transition-colors border-white hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
        <h2 className="mb-3 text-2xl font-semibold">
            {props.post.title.split(' ').slice(0,5).join(' ')}
        </h2>
        <p className="m-0 max-w-[30ch] text-sm opacity-50">
            {props.post.body.slice(0, 60)}...
        </p>
    </Link>
  );
}
