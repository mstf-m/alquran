import NextImage from "next/image";
import { Image } from "@nextui-org/react";
import {
  SvgQuran,
  SvgQuranSearch,
  SvgVesre,
  SvgQuranQuestion,
} from "@/components/Svgs";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/react";
import Link from "next/link";
import CarouselStories from "@/components/CarouselStories";
import CarouselBooks from "@/components/CarouselBooks";

export default function Home() {
  return (
    <main>
      <section className="">
        <NextImage
          fill
          priority
          src="/bg1.png"
          className="object-cover w-full"
          alt=""
          quality={100}
        />

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
              <Button
                className="bg-yellow-gradient text-blue-text border border-yellow-primary rounded-3xl w-full py-6 font-semibold"
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
        </div>
      </section>

      <section className="pt-11 h-screen">
        {/* need change */}
        <div className="flex flex-col items-end bg-cream-gradient container float-right rounded-s-3xl">
          <div className="flex gap-2 section-title rounded-s-full py-5 pl-4 pr-40">
            <SvgQuran />
            <h3 className="font-semibold text-blue-text text-2xl">Quran</h3>
          </div>

          {/* need change */}
          <div className="flex border-[10px] border-black/10 rounded-3xl bg-card-gradient bg-white self-center translate-y-8">
            <div className=" flex flex-col max-w-80 ml-20 mt-20 gap-10">
              <div className="rounded-2xl border-8 border-white/50 p-6 text-blue-text bg-white max-h-fit">
                <h4 className="font-black">Quran</h4>
                <p className="text-xs">
                  Alquran Introduction Alquran Introduction Alquran Alquran
                  Introduction Alquran Introduction Alquran Alquran Introduction
                  Alquran Introduction Alquran Alquran Introduction Alquran
                  Introduction Alquran Alquran Introduction Alquran Introduction
                  Alquran Alquran Introduction Alquran Introduction Alquran
                </p>
              </div>

              <Button
                className="bg-yellow-gradient text-blue-text rounded-3xl w-full py-6 font-semibold"
                as={Link}
                href="#"
              >
                Quran
              </Button>
            </div>

            <Image
              src="/quran-image1.png"
              alt=""
              className="bg-yellow-radial"
            />
          </div>
        </div>
      </section>

      <section className="h-screen relative">
        <div className="bg-blue-gradient blur-2xl h-full w-full absolute top-0 left-0"></div>

        <div className=" h-full bg-[url('/bg2.png')] bg-fill relative z-10">
          <div className="flex items-center gap-2 section-title rounded-e-full max-w-fit py-5 pr-4 pl-40">
            <SvgQuranSearch />
            <h3 className="font-semibold text-blue-text text-2xl">
              Description index at Quran
            </h3>
          </div>

          <div className="flex justify-center items-end gap-32 container mx-auto mt-8">
            <Image src="/quran-image2.png" alt="" />

            <div>
              <div className="rounded-2xl border-8 border-white/50 p-6 text-blue-text bg-white max-w-md">
                <h4 className="font-black">Quran</h4>
                <p className="text-xs">
                  Alquran Introduction Alquran Introduction Alquran Alquran
                  Introduction Alquran Introduction Alquran Alquran Introduction
                  Alquran Introduction Alquran Alquran Introduction Alquran
                  Introduction Alquran Alquran Introduction Alquran Introduction
                  Alquran Alquran Introduction Alquran Introduction Alquran
                </p>
              </div>

              <div className="flex justify-between items-center bg-white rounded-lg my-4 py-2 px-3">
                <div className="flex items-center gap-3">
                  <SvgVesre />
                  <span className="font-semibold text-sm">Verse</span>
                </div>

                <span className="text-xs text-[#B4B9C9]">Explain</span>
              </div>

              <div className="flex justify-between items-center bg-white rounded-lg my-4 py-2 px-3">
                <div className="flex items-center gap-3">
                  <SvgVesre />
                  <span className="font-semibold text-sm">Verse</span>
                </div>

                <span className="text-xs text-[#B4B9C9]">Explain</span>
              </div>

              <div className="flex justify-between items-center bg-white rounded-lg my-4 py-2 px-3">
                <div className="flex items-center gap-3">
                  <SvgVesre />
                  <span className="font-semibold text-sm">Verse</span>
                </div>

                <span className="text-xs text-[#B4B9C9]">Explain</span>
              </div>

              <Button
                className="bg-yellow-gradient text-blue-text rounded-3xl w-full py-6 font-semibold"
                as={Link}
                href="#"
              >
                See More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* repeat 1 */}

      <section className="pt-11 h-screen">
        {/* need change */}
        <div className="flex flex-col items-end bg-cream-gradient container float-right rounded-s-3xl">
          <div className="flex gap-2 section-title rounded-s-full py-5 pl-4 pr-40">
            <SvgQuran />
            <h3 className="font-semibold text-blue-text text-2xl">Quran</h3>
          </div>

          {/* need change */}
          <div className="flex items-center border-[10px] border-black/10 rounded-3xl bg-card-gradient bg-white self-center translate-y-8 py-14 pl-10">
            <div className=" flex flex-col max-w-80 gap-10">
              <div className="rounded-2xl border-8 border-white/50 p-6 text-blue-text bg-white max-h-fit">
                <h4 className="font-black">Quran</h4>
                <p className="text-xs">
                  Alquran Introduction Alquran Introduction Alquran Alquran
                  Introduction Alquran Introduction Alquran Alquran Introduction
                  Alquran Introduction Alquran Alquran Introduction Alquran
                  Introduction Alquran Introduction Alquran Alquran Introduction
                  Introduction Alquran Introduction Alquran Alquran Introduction
                  Introduction Alquran Introduction Alquran Alquran
                  IntroductionIntroduction Alquran Introduction Alquran Alquran
                  Introduction Introduction Alquran Introduction Alquran Alquran
                  Introduction Introduction Alquran Alquran Introduction Alquran
                  Introduction Alquran Alquran Introduction Alquran Introduction
                  Alquran
                </p>
              </div>

              <Button
                className="bg-yellow-gradient text-blue-text rounded-3xl w-full py-6 font-semibold"
                as={Link}
                href="#"
              >
                Quran
              </Button>
            </div>

            <div className=" overflow-hidden h-72"><CarouselStories /></div>
            
          </div>
        </div>
      </section>

      {/* repeat 1 */}

      {/* repeat 2 */}

      <section className="h-screen relative">
        <div className="bg-blue-gradient blur-2xl h-full w-full absolute top-0 left-0"></div>

        <div className=" h-full bg-[url('/bg2.png')] bg-fill relative z-10">
          <div className="flex items-center gap-2 section-title rounded-e-full max-w-fit py-5 pr-4 pl-40">
            <SvgQuranQuestion />
            <h3 className="font-semibold text-blue-text text-2xl">
              Sura Introduction
            </h3>
          </div>

          <div className="flex justify-center items-end gap-32 container mx-auto mt-8">
            <Image src="/quran-image3.png" alt="" />

            <div>
              <div className="rounded-2xl border-8 border-white/50 p-6 text-blue-text bg-white max-w-xl">
                <h4 className="font-black">Sura Introduction</h4>
                <p className="text-xs">
                  Alquran Introduction Alquran Introduction Alquran Alquran
                  Introduction Alquran Introduction Alquran Alquran Introduction
                  Alquran Introduction Alquran Alquran Introduction Alquran
                  Introduction Alquran Alquran Introduction Alquran Introduction
                  Alquran Alquran Introduction Alquran Introduction Alquran
                  Alquran Introduction Alquran Introduction Alquran Alquran
                  Introduction Alquran Introduction Alquran Alquran Introduction
                  Alquran Introduction Alquran Alquran Introduction Alquran
                  Introduction Alquran Alquran
                  Introduction Alquran Introduction Alquran Alquran Introduction
                  Alquran Introduction Alquran Alquran Introduction Alquran
                  Introduction Alquran AlquranIntroduction Alquran Introduction Alquran Alquran Introduction
                  Alquran Introduction Alquran Alquran Introduction Alquran
                  Introduction Alquran Alquran
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-10 mb-6">
                <div className="flex justify-between items-center bg-white rounded-lg py-2 px-3">
                  <div className="flex items-center gap-3">
                    <SvgVesre />
                    <span className="font-semibold text-sm">Verse</span>
                  </div>
                </div>

                <div className="flex justify-between items-center bg-white rounded-lg py-2 px-3">
                  <div className="flex items-center gap-3">
                    <SvgVesre />
                    <span className="font-semibold text-sm">Verse</span>
                  </div>
                </div>

                <div className="flex justify-between items-center bg-white rounded-lg py-2 px-3">
                  <div className="flex items-center gap-3">
                    <SvgVesre />
                    <span className="font-semibold text-sm">Verse</span>
                  </div>
                </div>

                <div className="flex justify-between items-center bg-white rounded-lg py-2 px-3">
                  <div className="flex items-center gap-3">
                    <SvgVesre />
                    <span className="font-semibold text-sm">Verse</span>
                  </div>
                </div>

                <div className="flex justify-between items-center bg-white rounded-lg py-2 px-3">
                  <div className="flex items-center gap-3">
                    <SvgVesre />
                    <span className="font-semibold text-sm">Verse</span>
                  </div>
                </div>

                <div className="flex justify-between items-center bg-white rounded-lg py-2 px-3">
                  <div className="flex items-center gap-3">
                    <SvgVesre />
                    <span className="font-semibold text-sm">Verse</span>
                  </div>
                </div>
              </div>

              <Button
                className="bg-yellow-gradient text-blue-text rounded-3xl w-full py-6 font-semibold"
                as={Link}
                href="#"
              >
                See More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* repeat 2 */}


      {/* repeat 3 */}

      <section className="pt-11 h-screen">
        {/* need change */}
        <div className="flex flex-col items-end bg-cream-gradient container float-right rounded-s-3xl">
          <div className="flex gap-2 section-title rounded-s-full py-5 pl-4 pr-40">
            <SvgQuran />
            <h3 className="font-semibold text-blue-text text-2xl">Quran</h3>
          </div>

          {/* need change */}
          <div className="flex flex-col items-center gap-10 border-[10px] border-black/10 rounded-3xl bg-card-gradient bg-white self-center translate-y-8 py-14 pl-10 overflow-hidden">
            <CarouselBooks />
            <Button
                className="w-fit  bg-yellow-gradient text-blue-text rounded-3xl py-6 font-semibold"
                as={Link}
                href="#"
              >
                See More
              </Button>
          </div>
        </div>
      </section>

      {/* repeat 3 */}
    </main>
  );
}
