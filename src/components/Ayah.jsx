'use client'

import { useQuranStore } from "@/stores/quran-store";

export default function Ayah({ id, text }) {
  const update = useQuranStore((state) => state.updateAyahId);

  const updateAyahId = () => {
    update(id);
  };

  return (
    <p className="inline px-2 cursor-pointer hover:text-blue-text hover:drop-shadow-lg" onClick={updateAyahId}>
      {text}
    </p>
  );
}
