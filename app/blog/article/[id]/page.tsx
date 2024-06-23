import Image from "next/image";
import ArticlePage from "@/app/components/ArticlePage";
import Header from "@/app/components/Header";
import PostMeta from "@/app/components/PostMeta";

export default async function Article({ params }: { params: { id: string } }) {
  const res = await fetch('https://dummyjson.com/posts/' + params.id)
  const data = await res.json()
  console.log(data);

  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center p-24">
          <h1 className="mb-8 text-2xl font-semibold">{data.title}</h1>
          <p className="m-0 max-w-[50%] text-sm opacity-50">{data.body}</p>
          <PostMeta postData={{likes:data.reactions.likes, views:data.views}} />
      </main>
    </>

  );
}
