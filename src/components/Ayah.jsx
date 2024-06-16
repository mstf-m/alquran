"use client";

import { useQuranStore } from "@/stores/quran-store";
import localFont from "next/font/local";

const myFont = localFont({
  src: "../../public/font/ScheherazadeRegOT.ttf",
  display: "swap",
});

export default function Ayah({ id, text, number, onOpen }) {
  const update = useQuranStore((state) => state.updateAyahId);

  String.prototype.toIndiaDigits = function () {
    var id = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    return this.replace(/[0-9]/g, function (w) {
      return id[+w];
    });
  };
  let num = number.toString();



  function removeFromString(str) {
    return str.replace(/بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ /g, '');
  }
  let firstAyah = number == 1;

  return firstAyah ? (
    <>
    <p className={`${myFont.className} text-4xl text-center pb-4 px-1 cursor-pointer hover:text-blue-text hover:drop-shadow-lg`}>بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ </p>
    <p
      className={`${myFont.className} text-4xl inline px-1 cursor-pointer hover:text-blue-text hover:drop-shadow-lg`}
      onClick={() => {
        update(id);
        onOpen();
      }}
    >
      {removeFromString(text)} &#1757;{num.toIndiaDigits()}
    </p>
    </>
  ) : (
    <p
      className={`${myFont.className} text-4xl inline px-1 cursor-pointer hover:text-blue-text hover:drop-shadow-lg`}
      onClick={() => {
        update(id);
        onOpen();
      }}
    >
      {text} &#1757;{num.toIndiaDigits()}
    </p>
  );
}
