"use client";

import Ayah from "@/components/Ayah";
import BgPattern from "@/components/UI/BgPattern";
import Breadcrumb from "@/components/UI/Breadcrumb";
import AyahButton from "@/components/UI/Buttons/AyahButton";
import SurahButton from "@/components/UI/Buttons/SurahButton";
import { useQuranStore } from "@/stores/quran-store";
import { useEffect, useState } from "react";
import { useDisclosure } from "@nextui-org/react";
import AyahModal from "@/components/UI/AyahModal";

export default function Page() {
  const [allSurahs, setAllSurahs] = useState([]);
  const [singleSurah, setSingleSurah] = useState([]);
  const [singleAyah, setSingleAyah] = useState([]);

  const { surahId, ayahId } = useQuranStore();

  const {isOpen, onOpen, onOpenChange} = useDisclosure();

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
      const res = await fetch(
        `${process.env.mainURL}/quran/v1/surah-ayahs?surah=${id}`
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const result = await res.json();
      setSingleSurah(result.ayahs);
    }

    getSurah(surahId);
  }, [surahId]);

  useEffect(() => {
    async function getSurah(id) {
      const res = await fetch(
        `${process.env.mainURL}/quran/v1/ayah-detail?ayah_id=${id}`
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const result = await res.json();
      setSingleAyah(result.ayahs[0]);
    }

    getSurah(ayahId);
    onOpen();
  }, [ayahId, onOpen]);

  return (
    <>
    <div className="relative overflow-hidden">
      <Breadcrumb />
      <BgPattern />
      <div className="mx-auto container mb-20 md:mb-28 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-1 flex justify-center gap-4 p-4 shadow-[0_4px_4px_0_rgba(0,0,0,0.08)] backdrop-blur-[2px] rounded-3xl">
          <div className="flex flex-col gap-4 max-h-screen overflow-y-auto">
            {allSurahs.map((obj, index) => (
              <SurahButton key={index} data={obj} />
            ))}
          </div>
          <div className="flex flex-col gap-4 max-h-screen overflow-y-auto">
            {singleSurah.map((obj, index) => (
              <AyahButton key={index} id={obj.id} i={index} />
            ))}
          </div>
        </div>

        <div className="col-span-2 flex flex-col items-center py-4 px-20 shadow-[0_4px_4px_0_rgba(0,0,0,0.08)] backdrop-blur-[2px] rounded-3xl max-h-screen overflow-y-auto">
          <div className="px-20 py-6">
            <div
              className="text-justify leading-10 text-xl font-bold"
              dir="rtl"
            >
              {singleSurah.map((obj, index) => (
                <Ayah key={index} id={obj.id} text={obj.text} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    <AyahModal isOpen={isOpen} onOpenChange={onOpenChange} data={singleAyah}/>
    </>
  );
}
