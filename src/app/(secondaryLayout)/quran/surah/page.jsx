"use client";

import BgPattern from "@/components/UI/BgPattern";
import Breadcrumb from "@/components/UI/Breadcrumb";
import SurahButton from "@/components/UI/Buttons/SurahButton";
import { useQuranStore } from "@/stores/quran-store";
import { useEffect, useState } from "react";


export default function page() {
  const [allSurahs, setAllSurahs] = useState([]);
  const [singleSurah, setSingleSurah] = useState([]);

  const { surahId } = useQuranStore();

  useEffect(() => {
    async function getAllSurahs() {
      const res = await fetch(`${process.env.mainURL}/quran/v1/surah`);
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const result = await res.json();
      setAllSurahs(result.ayahs);
    }
    getAllSurahs();
  }, []);

  useEffect(() => {
    async function getSurah(id) {
      const res = await fetch(`${process.env.mainURL}/quran/v1/surah-ayahs?surah=${id}`);
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const result = await res.json();
      setSingleSurah(result.ayahs);
    }

    getSurah(surahId);
  }, [surahId]);

  return (
    <div className="relative overflow-hidden">
      <Breadcrumb />
      <BgPattern />
      <div className="mx-auto container mb-20 md:mb-28 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-1 flex flex-col items-center gap-10 py-8 px-4 shadow-[0_4px_4px_0_rgba(0,0,0,0.08)] backdrop-blur-[2px] rounded-3xl max-h-screen overflow-y-auto">
          <div className="flex flex-col gap-4">
            {allSurahs.map((obj, index) => (
              <SurahButton key={index} data={obj} />
            ))}
          </div>
        </div>

        <div className="col-span-2 flex flex-col items-center py-4 px-20 shadow-[0_4px_4px_0_rgba(0,0,0,0.08)] backdrop-blur-[2px] rounded-3xl max-h-screen">
          <div className="px-20 py-6">
          <div className="flex flex-row-reverse flex-wrap gap-2 justify-center text-xl font-bold overflow-y-scroll"> {singleSurah.map((obj, index) => (
              <p className="text-center" key={index}>{obj.text}</p>
            ))}</div>
            </div>
        </div>
      </div>
    </div>
  );
}
