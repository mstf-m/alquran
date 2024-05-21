import { Divider } from "@nextui-org/react";
import NextImage from "next/image";
import FramerTrigger from "@/wrappers/FramerTrigger";

import { Link, Button } from "@nextui-org/react";
import Header from "../UI/Header";
import PrimaryButton from "../UI/Buttons/PrimaryButton";

export default function Section1() {
  return (
    <section>
      <Header />

      <NextImage
        fill
        priority
        src="/bg1.png"
        className="object-cover w-full"
        alt=""
        quality={100}
      />

      <FramerTrigger position={-500}>
        <div className="relative pt-52 mx-auto container h-screen">
          <div className="text-white max-w-96">
            <h1 className="text-4xl font-bold">Alquran Introduction</h1>
            <Divider className="my-8 bg-yellow-primary" />
            <h2 className="text-sm leading-9">
              Alquran Introduction Alquran Introduction Alquran Alquran
              Introduction Aquran Aon Alquran Alquran Introduction Alquran
              Introduction Alquran Alquran Introduction Alquran Introduction
              Alquran Alquran Introduction
            </h2>
            <div className="flex mt-20 gap-4 justify-between">
              <PrimaryButton title="See More" href="#" isFull/>
              <Button
                className="bg-transparent text-yellow-primary border border-yellow-primary rounded-3xl w-full py-6 font-semibold"
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
