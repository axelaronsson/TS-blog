import Image from "next/image";
import Header from "@/app/components/Header";
import PostMeta from "@/app/components/PostMeta";
import Comments from "@/app/components/Comments";
import Footer from "@/app/components/Footer";
import ArticlePage from "@/app/components/ArticlePage";

export type SinglePost = {
  "id": number,
  "title": string,
  "body": string,
  "tags": [
    string,
    string,
    string
  ],
  "reactions": {
    "likes": number,
    "dislikes": number
  },
  "views": number,
  "userId": number
}

export default async function Article({ params }: { params: { id: string } }) {
  const res = await fetch('https://dummyjson.com/posts/' + params.id)
  const data:SinglePost = await res.json()
  // console.log(data);

  return (
    <>
      <Header />
      <ArticlePage postData={data} id={params.id} />
      <Footer />
    </>

  );
}
