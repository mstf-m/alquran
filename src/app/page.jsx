"use client";

import SectionA from "@/components/homeSections/SectionA";
import SectionB from "@/components/homeSections/SectionB";
import SectionC from "@/components/homeSections/SectionC";

import { Image } from "@nextui-org/react";
import {
  SvgQuran,
  SvgQuranSearch,
  SvgVesre,
  SvgQuranQuestion,
} from "@/components/Svgs";
import PrimaryButton from "@/components/UI/Buttons/PrimaryButton";
import CarouselStories from "@/components/UI/Carousels/CarouselStories";
import CarouselBooks from "@/components/UI/Carousels/CarouselBooks";
import FullpageProvider from "@/providers/fullpage-provider";
import FramerTrigger from "@/wrappers/FramerTrigger";
import DiscriptionCard from "@/components/UI/Cards/DiscriptionCard";
import { useEffect, useState } from "react";

export default function Home() {
  const [screenWidth, setScreenWidth] = useState(50);
  const [animationStartPosition, setAnimationStartPosition] = useState(0);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    screenWidth >= 768 ? setAnimationStartPosition(500) : setAnimationStartPosition(50);
  }, [screenWidth]);

  return (
    <main className="overflow-hidden">
      <FullpageProvider screenWidth={screenWidth}>
        <SectionA screenWidth={screenWidth} />

        <SectionB isJustifyStart>
          <div className="flex flex-col items-center md:max-w-96 mx-4 md:mx-0 md:ml-20 md:mt-20 gap-10 pb-9">
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
        </SectionB>

        <SectionC>
          <FramerTrigger position={animationStartPosition}>
            {screenWidth >= 768 ? (
              <Image src="/quran-image2.png" alt="" />
            ) : (
              <Image src="/quran-image2-mobile.png" alt="" />
            )}
          </FramerTrigger>

          <FramerTrigger position={animationStartPosition}>
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

              <div className="md:mb-9">
                <div className="flex justify-between items-center bg-white rounded-lg my-2 md:my-4 py-1 md:py-2 px-3">
                  <div className="flex items-center gap-3">
                    <SvgVesre />
                    <span className="font-semibold text-sm">Verse</span>
                  </div>

                  <span className="text-xs text-[#B4B9C9]">Explain</span>
                </div>

                <div className="flex justify-between items-center bg-white rounded-lg my-2 md:my-4 py-1 md:py-2 px-3">
                  <div className="flex items-center gap-3">
                    <SvgVesre />
                    <span className="font-semibold text-sm">Verse</span>
                  </div>

                  <span className="text-xs text-[#B4B9C9]">Explain</span>
                </div>

                <div className="flex justify-between items-center bg-white rounded-lg my-2 md:my-4 py-1 md:py-2 px-3">
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
        </SectionC>

        <SectionB>
          <div className="flex flex-col-reverse md:flex-row items-center py-4 md:py-14 px-4 md:px-10 md:gap-16">
            <div className="flex flex-col max-w-80 gap-4 md:gap-10">
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
              <CarouselStories screenWidth={screenWidth} />
            </div>
          </div>
        </SectionB>

        <SectionC>
          <FramerTrigger position={-animationStartPosition}>
            {screenWidth >= 768 ? (
              <Image src="/quran-image3.png" alt="" />
            ) : (
              <Image src="/quran-image3-mobile.png" alt="" />
            )}
          </FramerTrigger>

          <FramerTrigger position={animationStartPosition}>
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
              Introduction Alquran Introduction Alquran Alquran Introduction"
              />

              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 mt-2 md:mt-10 mb-2 md:mb-8">
                <div className="flex justify-between items-center bg-white rounded-lg py-1 md:py-2 px-3">
                  <div className="flex items-center gap-3">
                    <SvgVesre />
                    <span className="font-semibold text-sm">Verse</span>
                  </div>
                </div>

                <div className="flex justify-between items-center bg-white rounded-lg py-1 md:py-2 px-3">
                  <div className="flex items-center gap-3">
                    <SvgVesre />
                    <span className="font-semibold text-sm">Verse</span>
                  </div>
                </div>

                <div className="flex justify-between items-center bg-white rounded-lg py-1 md:py-2 px-3">
                  <div className="flex items-center gap-3">
                    <SvgVesre />
                    <span className="font-semibold text-sm">Verse</span>
                  </div>
                </div>

                <div className="flex justify-between items-center bg-white rounded-lg py-1 md:py-2 px-3">
                  <div className="flex items-center gap-3">
                    <SvgVesre />
                    <span className="font-semibold text-sm">Verse</span>
                  </div>
                </div>

                {screenWidth >= 768 ? (
                  <>
                    <div className="flex justify-between items-center bg-white rounded-lg py-1 md:py-2 px-3">
                      <div className="flex items-center gap-3">
                        <SvgVesre />
                        <span className="font-semibold text-sm">Verse</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center bg-white rounded-lg py-1 md:py-2 px-3">
                      <div className="flex items-center gap-3">
                        <SvgVesre />
                        <span className="font-semibold text-sm">Verse</span>
                      </div>
                    </div>
                  </>
                ) : null}
              </div>

              <PrimaryButton title="See More" href="#" />
            </div>
          </FramerTrigger>
        </SectionC>

        <SectionB footer>
          <div className="flex flex-col items-center gap-2 md:gap-10 py-0 md:py-14 pl-10 overflow-hidden px-6 md:px-0">
            <CarouselBooks />
            <PrimaryButton title="See More" href="/library" />
          </div>
        </SectionB>
      </FullpageProvider>
    </main>
  );
}
