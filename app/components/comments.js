import React from "react";

export default async function Comments({ promise }) {
  const comments = await promise;
  return (
    <div className="mt-10">
      <h1 className="text-amber-300">Comments</h1>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.body}</li>
        ))}
      </ul>
    </div>
  );
}
