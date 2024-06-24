"use client";

import { useQuranStore } from "@/stores/quran-store";
import { Button } from "@nextui-org/react";

export default function SurahButton({ data }) {
  const { surahId } = useQuranStore();
  const update = useQuranStore((state) => state.updateSurahId);

  const updateSurahId = () => {
    update(data.id);
  };

  return (
    <Button
      onClick={updateSurahId}
      className={`w-full group flex justify-start gap-3 border rounded-xl py-6 px-2 text-blue-text ${data.id==surahId?'border-[#5AA3F7]/15 bg-[#5AA3F7]/15':'border-neutral-color-400 bg-white'} hover:border-[#5AA3F7]/15 hover:bg-[#5AA3F7]/15`}
    >
      <span className={`rounded-lg w-9 h-9 hidden lg:flex justify-center items-center bg-[#5AA3F7]/15 text-blue-text ${data.id==surahId?'bg-white':'bg-[#5AA3F7]/15'} group-hover:bg-white`}>
        {data.number}
      </span>
      <h3 className="font-medium text-blue-text">{data.name_en}</h3>
    </Button>
  );
}
