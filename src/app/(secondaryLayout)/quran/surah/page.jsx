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
  const [isFirstLoad, setIsFirstLoad] = useState(true);

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

    setIsFirstLoad(false);
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
    async function getAyah(id) {
      setSingleAyah(null);

      const res = await fetch(
        `${process.env.mainURL}/quran/v1/ayah-detail?ayah_id=${id}`
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const result = await res.json();
      setSingleAyah(result.ayahs[0]);
    }
    
    getAyah(ayahId);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ayahId]);

  return (
    <>
    <div className="relative overflow-hidden">
      <Breadcrumb />
      <BgPattern />
      <div className="mx-auto container mb-20 md:mb-28 grid grid-cols-1 md:grid-cols-4 gap-8">
       
        <div className="md:col-span-1 flex flex-col md:flex-row justify-center gap-4 p-4 border border-neutral-color-400 bg-[#C2C2C2]/10 shadow-[0_4px_4px_0_rgba(0,0,0,0.08)] backdrop-blur-[2px] rounded-3xl max-h-screen">
          <div className="flex md:flex-col gap-4 overflow-y-auto pr-2">
            {allSurahs.map((obj, index) => (
              <SurahButton key={index} data={obj} />
            ))}
          </div>
          <div className="flex md:flex-col gap-4 overflow-y-auto pr-2 pb-2">
            {singleSurah.map((obj, index) => (
              <AyahButton key={index} id={obj.id} i={index} onOpen={onOpen}/>
            ))}
          </div>
        </div>

        <div className="md:col-span-3 flex flex-col items-center py-4 md:px-20 border border-neutral-color-400 bg-white/20 shadow-[0_4px_4px_0_rgba(0,0,0,0.08)] backdrop-blur-[2px] rounded-3xl max-h-screen overflow-y-auto">
          <div className="px-5 md:px-10 lg:px-20 py-6">
            <div
              className="text-justify leading-[60px] font-medium"
              dir="rtl"
            >
              {singleSurah.map((obj, index) => (
                <Ayah key={index} id={obj.id} text={obj.text} number={obj.number_in_surah} onOpen={onOpen}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    <AyahModal isOpen={isOpen} onOpenChange={()=>{onOpenChange()}} data={singleAyah}/>
    </>
  );
}
