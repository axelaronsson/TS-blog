import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ArticlePage from "@/app/components/ArticlePage";

export type SinglePost = {
  id: number;
  title: string;
  body: string;
  tags: [string, string, string];
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
  userId: number;
};

export default async function Article({ params }: { params: { id: string } }) {
  const res = await fetch("https://dummyjson.com/posts/" + params.id);
  const data: SinglePost = await res.json();

  return (
    <>
      <Header />
      <ArticlePage postData={data} id={params.id} />
      <Footer />
    </>
  );
}
