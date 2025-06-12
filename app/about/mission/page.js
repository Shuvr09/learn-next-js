import Button from "@/app/components/button";
import Image from "next/image";
import React from "react";
import myimage from "@/public/images/Shuvro_Ghibli.png";

export default function Mission() {
  return (
    <main className="mt-10">
      <div>This is mission page</div>

      <div className="w-[300px]">
        <Image
          placeholder="blur"
          src={myimage}
          alt="My Image in Ghibli"
          quality={100}
        />
      </div>

      <Button />
    </main>
  );
}
