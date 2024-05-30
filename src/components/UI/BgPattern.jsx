import { Image } from "@nextui-org/react";
import React from "react";

export default function BgPattern() {
  return (
    <>
      <Image
        src="/bg4.png"
        alt=""
        className="absolute top-0 left-0 -z-10 rotate-180"
        removeWrapper
      />
      <Image
        src="/bg4.png"
        alt=""
        className="absolute top-[700px] right-0 -z-10"
        removeWrapper
      />
       {/* <Image
        src="/bg4.png"
        alt=""
        className="absolute top-[1100px] left-0 -z-10 rotate-180"
        removeWrapper
      /> */}
    </>
  );
}
