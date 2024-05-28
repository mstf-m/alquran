import { Divider } from "@nextui-org/react";
import NextImage from "next/image";
import FramerTrigger from "@/wrappers/FramerTrigger";

import { Link, Button } from "@nextui-org/react";
import Header from "../UI/Header";
import PrimaryButton from "../UI/Buttons/PrimaryButton";
import { useEffect, useState } from "react";

export default function Section1({screenWidth}) {

  return (
    <section className="h-screen flex flex-col justify-between md:justify-start">
      <Header />

      {screenWidth >= 768 ? (
        <NextImage
          fill
          priority
          src="/bg1.png"
          className="object-cover"
          alt=""
          quality={100}
        />
      ) : (
        <NextImage
          fill
          priority
          src="/bg1-long.png"
          className="object-cover"
          alt=""
          quality={100}
        />
      )}

      <FramerTrigger position={-500}>
        <div className="flex justify-center md:justify-start pt-56 relative px-4 md:px-0 mx-auto container">
          <div className="text-white max-w-96">
            <h1 className="text-3xl md:text-4xl font-bold text-center md:text-left">Alquran Introduction</h1>
            <Divider className="my-5 md:my-8 bg-yellow-primary" />
            <h2 className="text-sm leading-7 md:leading-9">
              Alquran Introduction Alquran Introduction Alquran Alquran
              Introduction Aquran Aon Alquran Alquran Introduction Alquran
              Introduction Alquran Alquran Introduction Alquran Introduction
              Alquran Alquran Introduction
            </h2>
            <div className="flex mt-5 md:mt-20 mb-10 gap-4 justify-between">
              <PrimaryButton title="See More" href="#" isFull />
              <Button
                className="bg-transparent text-yellow-primary border border-yellow-primary rounded-3xl w-full py-3 md:py-6 font-semibold"
                as={Link}
                href="#"
              >
                Details
              </Button>
            </div>
          </div>
        </div>
      </FramerTrigger>
    </section>
  );
}
