import Image from "next/image";
import Link from "next/link";
import PostLink from "../components/PostLink";
import Header from "../components/Header";

type Posts = {
    posts: {
        id:number,
        title:string,
        body:string,
        tags:[],
        reactions:{},
        views:number,
        userId:number
    }[]
}
export default async function Blog() {
    const res = await fetch('https://dummyjson.com/posts?limit=10&skip=10')
    const data:Posts = await res.json()
    console.log(data);


  return (
    <>
    <Header />
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">

        {
            data.posts.map(item => {
                return <PostLink post={item} />
                })
        }

        {/* <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a> */}
      </div>
    </main>
    </>
  );
}
