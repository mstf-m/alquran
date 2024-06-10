"use client";

import BgPattern from "@/components/UI/BgPattern";
import Breadcrumb from "@/components/UI/Breadcrumb";
import SurahCard from "@/components/UI/Cards/SurahCard";
import { useQuranStore } from "@/stores/quran-store";

async function getAllSurahs() {
  const res = await fetch(`${process.env.mainURL}/quran/v1/surah`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function getSurah(id) {
  const res = await fetch(`${process.env.mainURL}/quran/v1/surah?id=${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function page() {
  const { surahId } = useQuranStore();
  
  const allSurahs = await getAllSurahs();
  const getSingleSurah = await getSurah(surahId);
  console.log("salam", getSingleSurah);
  
  return (
    <div className="relative overflow-hidden">
      <Breadcrumb />
      <BgPattern />
      <div className="mx-auto container mb-20 md:mb-28 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-1 flex flex-col items-center gap-10 py-8 px-4 shadow-[0_4px_4px_0_rgba(0,0,0,0.08)] backdrop-blur-[2px] rounded-3xl">
          <div className="flex flex-col gap-4">
            {allSurahs.map((obj, index) => (
              <SurahCard key={index} data={obj} />
            ))}
          </div>
        </div>

        <div className="col-span-2 flex flex-col items-center gap-10 py-4 px-20 shadow-[0_4px_4px_0_rgba(0,0,0,0.08)] backdrop-blur-[2px] rounded-3xl">
          <div className="w-full">{getSingleSurah[0].name_en}</div>
        </div>
      </div>
    </div>
  );
}
