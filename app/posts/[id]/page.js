import Comments from "@/app/components/comments";
import getPost from "@/lib/getPost";
import getPostComments from "@/lib/getPostComment";
import React, { Suspense } from "react";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const post = await getPost(id);
  return {
    title: post.title,
    description: post.body,
  };
}

export default async function PostPage({ params }) {
  const { id } = await params;
  const postPromise = await getPost(id);
  const commentPromise = await getPostComments(id);
  const post = await postPromise;

  // const [post, comments] = await Promise.all([postPromise, commentPromise]);

  return (
    <div className="mt-6">
      <h2 className="text-blue-500">{post.title}</h2>
      <p className="mt-3">{post.body}</p>
      <hr></hr>

      <Suspense fallback="<h1>Loading comments...</h1>">
        <Comments promise={commentPromise} />
      </Suspense>
    </div>
  );
}
