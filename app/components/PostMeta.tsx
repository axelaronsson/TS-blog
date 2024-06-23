type PostData = {
  likes: number;
  views: number;
};
export default function PostMeta(props: { postData: PostData }) {
  return (
    <div className="w-[50%] mt-4">
      <p className="text-xs italic">
        Views: {props.postData.views}, Likes: {props.postData.likes}
      </p>
    </div>
  );
}
