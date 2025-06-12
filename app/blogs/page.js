import Link from "next/link";
import React from "react";

export default function Blogs() {
  const blogs = [
    {
      id: 1,
      title: "blog 1",
      description: "This is the first blog post.",
    },
    {
      id: 2,
      title: "blog 2",
      description: "This is the second blog post.",
    },
    {
      id: 3,
      title: "blog 3",
      description: "This is the third blog post.",
    },
  ];
  return (
    <main className="mt-10">
      <ul>
        {blogs.map((blog) => (
          <li className="mb-5" key={blog.id}>
            <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
