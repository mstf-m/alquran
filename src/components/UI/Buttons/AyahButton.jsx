"use client";

import { useQuranStore } from "@/stores/quran-store";
import { Button } from "@nextui-org/react";

export default function AyahButton({ id, i, onOpen }) {
  const update = useQuranStore((state) => state.updateAyahId);

  const updateAyahId = () => {
    update(id);
    onOpen();
  };

  return (
    <Button
      onClick={updateAyahId}
      className="min-w-9 md:min-w-fit h-9 px-6 md:px-4 py-6 rounded-xl flex justify-center items-center bg-white group-hover:bg-[#5AA3F7]/15 text-blue-text border border-neutral-color-400 hover:border-[#5AA3F7]/15"
    >
      {i+1}
    </Button>
  );
}
