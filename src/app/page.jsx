"use client";

import Section1 from "@/components/homeSections/Section1";
import Section2 from "@/components/homeSections/Section2";
import Section3 from "@/components/homeSections/Section3";

import { Image } from "@nextui-org/react";
import {
  SvgQuran,
  SvgQuranSearch,
  SvgVesre,
  SvgQuranQuestion,
} from "@/components/Svgs";
import PrimaryButton from "@/components/UI/Buttons/PrimaryButton";
import CarouselStories from "@/components/CarouselStories";
import CarouselBooks from "@/components/CarouselBooks";
import FullpageProvider from "@/providers/fullpage-provider";
import FramerTrigger from "@/wrappers/FramerTrigger";
import DiscriptionCard from "@/components/UI/Cards/DiscriptionCard";

export default function Home() {
  return (
    <main>
      <FullpageProvider>
        <Section1 />

        <Section2>
          <div className="flex flex-col items-center md:max-w-80 mx-4 md:mx-0 md:ml-20 md:mt-20 gap-10 pb-9">
            <DiscriptionCard
              style="border-gray-50"
              title="Quran"
              content="Alquran Introduction Alquran Introduction Alquran Alquran
                Introduction Alquran Introduction Alquran Alquran Introduction
                Alquran Introduction Alquran Alquran Introduction Alquran
                Introduction Alquran Alquran Introduction Alquran Introduction
                Alquran Alquran Introduction Alquran Introduction Alquran
                Introduction Alquran Introduction Alquran Introduction Alquran
                Introduction Alquran Introduction Alquran Introduction Alquran
                Introduction Alquran Introduction Alquran Introduction Alquran
                Introduction Alquran Introduction Alquran Introduction Alquran"
            />

            <PrimaryButton title="Quran" href="#" isFull />
          </div>

          <Image src="/quran-image1.png" alt="" className="bg-yellow-radial" />
        </Section2>

        <Section3>
          <FramerTrigger position={-500}>
            <Image src="/quran-image2.png" alt="" />
          </FramerTrigger>

          <FramerTrigger position={500}>
            <div>

            <DiscriptionCard
              style="border-blue-100 max-w-md"
              title="Quran"
              content="Alquran Introduction Alquran Introduction Alquran Alquran
              Introduction Alquran Introduction Alquran Alquran Introduction
              Alquran Introduction Alquran Alquran Introduction Alquran
              Introduction Alquran Alquran Introduction Alquran Introduction
              Alquran Alquran Introduction Alquran Introduction Alquran"
            />

              <div className="mb-9">
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
              </div>

              <PrimaryButton title="See More" href="#" />
            </div>
          </FramerTrigger>
        </Section3>

        <Section2>
          <div className="flex flex-col-reverse md:flex-row items-center py-14 px-10 gap-16">
            <div className="flex flex-col max-w-80 gap-10">

            <DiscriptionCard
              style="border-gray-50"
              title="Quran"
              content="Alquran Introduction Alquran Introduction Alquran Alquran
              Introduction Alquran Introduction Alquran Alquran Introduction
              Alquran Introduction Alquran Alquran Introduction Alquran
              Introduction Alquran Introduction Alquran Alquran Introduction
              Introduction Alquran Introduction Alquran Alquran Introduction
              Introduction Alquran Introduction Alquran Alquran
              IntroductionIntroduction Alquran Introduction Alquran Alquran
              Introduction Introduction Alquran Introduction Alquran Alquran
              Introduction Introduction Alquran Alquran Introduction Alquran
              Introduction Alquran Alquran Introduction Alquran Introduction
              Alquran"
            />

              <PrimaryButton title="Quran" href="#" isFull />
            </div>

            <div className=" overflow-hidden h-72">
              <CarouselStories />
            </div>
          </div>
        </Section2>

        <Section3>
          <FramerTrigger position={-500}>
            <Image src="/quran-image3.png" alt="" />
          </FramerTrigger>

          <FramerTrigger position={500}>
            <div>

            <DiscriptionCard
              style="border-blue-100 max-w-xl"
              title="Quran"
              content="Alquran Introduction Alquran Introduction Alquran Alquran
              Introduction Alquran Introduction Alquran Alquran Introduction
              Alquran Introduction Alquran Alquran Introduction Alquran
              Introduction Alquran Alquran Introduction Alquran Introduction
              Alquran Alquran Introduction Alquran Introduction Alquran
              Alquran Introduction Alquran Introduction Alquran Alquran
              Introduction Alquran Introduction Alquran Alquran Introduction
              Alquran Introduction Alquran Alquran Introduction Alquran
              Introduction Alquran Alquran Introduction Alquran Introduction
              Alquran Alquran Introduction Alquran Introduction Alquran
              Alquran Introduction Alquran Introduction Alquran
              AlquranIntroduction Alquran Introduction Alquran Alquran
              Introduction Alquran Introduction Alquran Alquran Introduction
              Alquran Introduction Alquran Alquran"
            />

              <div className="grid grid-cols-3 gap-4 mt-10 mb-8">
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

              <PrimaryButton title="See More" href="#" />
            </div>
          </FramerTrigger>
        </Section3>

        <Section2 footer>
          <div className="flex flex-col items-center gap-10 py-14 pl-10 overflow-hidden">
            <CarouselBooks />
            <PrimaryButton title="See More" href="#" />
          </div>
        </Section2>
      </FullpageProvider>
    </main>
  );
}
