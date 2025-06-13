import getPost from "@/lib/getPost";
import getPostComments from "@/lib/getPostComment";
import React from "react";

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

  const [post, comments] = await Promise.all([postPromise, commentPromise]);

  return (
    <div className="mt-6">
      <h2 className="text-blue-500">{post.title}</h2>
      <p className="mt-3">{post.body}</p>
      <hr></hr>
      <div className="mt-10">
        <h1>Comments</h1>
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>{comment.body}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
