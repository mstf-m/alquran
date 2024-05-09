import Image from "next/image";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/react";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section>
        <Image src="/bg1.png" fill alt="" quality={100} priority />

        <div className="absolute top-52 text-white max-w-96">
          <h1 className="text-4xl font-bold">Alquran Introduction</h1>
          <Divider className="my-8 bg-yellow-primary" />
          <p className="text-sm leading-9">
            Alquran Introduction Alquran Introduction Alquran Alquran
            Introduction Aquran Aon Alquran Alquran Introduction Alquran
            Introduction Alquran Alquran Introduction Alquran Introduction
            Alquran Alquran Introduction
          </p>
          <div className="flex mt-20 gap-4 justify-between">
            <Button
              className="bg-yellow-gradient border border-yellow-primary rounded-3xl w-full py-6 font-semibold"
              as={Link}
              href="#"
            >
              Quran
            </Button>
            <Button
              className="bg-transparent text-yellow-primary border border-yellow-primary rounded-3xl w-full py-6 font-semibold"
              as={Link}
              href="#"
            >
              Details
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
