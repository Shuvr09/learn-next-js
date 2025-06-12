"use client";
import React from "react";

export default function Button() {
  return (
    <div className="mt-5">
      <button
        className="px-3 py-1 bg-green-500 hover:bg-amber-500 rounded-2xl"
        onClick={() => console.log("I have clicked here")}
      >
        Click Here
      </button>
    </div>
  );
}
