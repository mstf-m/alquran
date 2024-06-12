"use client";

import { useQuranStore } from "@/stores/quran-store";
import { Button } from "@nextui-org/react";

export default function SurahButton({ data }) {
  const update = useQuranStore((state) => state.updateSurahId);

  const updateSurahId = () => {
    update(data.id);
  };

  return (
    <Button
      onClick={updateSurahId}
      className="group flex justify-start gap-3 border border-neutral-color-400 hover:border-[#5AA3F7]/15 rounded-xl bg-white hover:bg-[#5AA3F7]/15 py-6 px-2 text-blue-text w-full"
    >
      <span className="rounded-lg w-9 h-9 hidden md:flex justify-center items-center bg-[#5AA3F7]/15 group-hover:bg-white text-blue-text">
        {data.number}
      </span>
      <h3 className="font-medium text-blue-text">{data.name_en}</h3>
    </Button>
  );
}
