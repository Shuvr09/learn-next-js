import Link from "next/link";
import React from "react";

export default function AboutLayout({ children }) {
  return (
    <div>
      <nav className="mt-6 mb-6">
        <ul className="flex gap-6">
          <li>
            <Link href="/about/vision">Vision</Link>
          </li>
          <li>
            <Link href="/about/mission">Mission</Link>
          </li>
        </ul>
        {children}
      </nav>
    </div>
  );
}
