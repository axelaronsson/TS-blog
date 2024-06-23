import Image from "next/image";
import Link from "next/link";
import PostLink from "../../components/PostLink";
import Header from "../../components/Header";
import Pagination from "@/app/components/Pagination";

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
export default async function Blog({ params }: { params: { page: string } }) {
    const limit = 10
    const page = params.page + 0
    const skip = Number(page) - 10
    console.log(limit, skip);

    const res = await fetch(`https://dummyjson.com/posts?limit=${limit}&skip=${skip}`)
    const data:Posts = await res.json()
    // console.log(data);


  return (
    <>
    <Header />
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">

        {
            data.posts.map((item, i) => {
                return <PostLink key={i} post={item} />
                })
        }

      </div>
      <Pagination />
    </main>
    </>
  );
}
