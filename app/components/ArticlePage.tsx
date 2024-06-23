import Image from "next/image";
import PostMeta from "./PostMeta";
import Comments from "./Comments";
import { SinglePost } from "../blog/article/[id]/page";

export default function ArticlePage(props:{postData:SinglePost, id:string}) {
  const likes = props.postData.reactions.likes
  const views = props.postData.views

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="mb-8 text-2xl font-semibold">{props.postData.title}</h1>
      <p className="m-0 max-w-[50%] text-sm opacity-50">{props.postData.body}</p>
      <PostMeta postData={{likes:likes, views:views}} />
      <Comments id={props.id} />
    </main>
  );
}
