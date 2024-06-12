"use client";

import { useQuranStore } from "@/stores/quran-store";
import { Button } from "@nextui-org/react";

export default function AyahButton({ id, i }) {
  const update = useQuranStore((state) => state.updateAyahId);

  const updateAyahId = () => {
    update(id);
  };

  return (
    <Button
      onClick={updateAyahId}
      className="min-w-fit h-9 py-6 rounded-xl flex justify-center items-center bg-white group-hover:bg-[#5AA3F7]/15 text-blue-text border border-neutral-color-400 hover:border-[#5AA3F7]/15"
    >
      {i+1}
    </Button>
  );
}
