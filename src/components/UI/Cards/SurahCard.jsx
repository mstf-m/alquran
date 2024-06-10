'use client'

import { useQuranStore } from "@/stores/quran-store";
import { useRouter } from 'next/navigation'

export default function SurahCard({ data }) {
  const update = useQuranStore((state) => state.updateSurahId)
  const router= useRouter();

  const updateSurahId = () => {
    update(data.id)
    router.push("/quran/surah");
  };
  

  return (
    <button
      onClick={updateSurahId}
      className="group flex justify-between items-center border border-neutral-color-400 hover:border-blue-primary rounded-full bg-white hover:bg-blue-primary/10 py-0 pl-0 pr-4 overflow-visible"
    >
      <div className="flex items-center">
        <span className="rounded-full border-8 border-[#CCF3FA] w-14 h-14 flex justify-center items-center -translate-x-4 group-hover:-translate-x-0 duration-400 ease-linear bg-white group-hover:bg-blue-primary text-neutral-color-800 group-hover:text-white">
          {data.number}
        </span>
        <div className="pl-3 flex flex-col items-start">
          <h3 className="font-bold text-neutral-color-800">{data.name_en}</h3>
          <h4 className="text-xs font-bold text-neutral-color-600">
            {data.name_en_translation}
          </h4>
        </div>
      </div>

      <div>
        <span className="text-xs font-bold text-neutral-color-600">
          {data.type}
        </span>
      </div>
    </button>
  );
}
