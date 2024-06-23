import Image from "next/image";

type Comment = {
  id: number,
  body: string,
  postId: number,
  likes: number,
  user: {
    id:number,
    username:string,
    fullName:string
  }
}
export default async function Comments(props:{id:string}) {
// 'https://dummyjson.com/posts/1/comments'
  const res = await fetch(`https://dummyjson.com/posts/${props.id}/comments`)
  const data:{comments: Comment[]} = await res.json()
  // console.log(data);


  return (
    <>
      <h1 className="mt-8 text-1xl font-semibold">Comments</h1>
      <div className="w-[50%]">
      {data.comments.map((item, i) => {
        return <div key={i} className="border-dashed border-t-2 rounded p-2 m-2">
          <p>User: {item.user.username}</p>
          <p>{item.body}</p>
        </div>
      })}
      </div>
    </>
  );
}
