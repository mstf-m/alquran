'use client'

import { useQuranStore } from "@/stores/quran-store";
import localFont from 'next/font/local'

const myFont = localFont({
  src: '../../public/font/ScheherazadeRegOT.ttf',
  display: 'swap',
})

export default function Ayah({ id, text }) {
  const update = useQuranStore((state) => state.updateAyahId);

  const updateAyahId = () => {
    update(id);
  };

  return (
    <p className={`${myFont.className} text-3xl inline px-2 cursor-pointer hover:text-blue-text hover:drop-shadow-lg`} onClick={updateAyahId}>
      {text}
    </p>
  );
}
