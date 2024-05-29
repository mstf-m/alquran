import { Image } from "@nextui-org/react";

export default function Footer() {
  return (
    <footer className="w-full bg-neutral-color-800">
      <div className="flex flex-col md:flex-row justify-start md:justify-around items-start md:items-center shadow-[0_0_10px_0_rgba(88,88,88,0.25)] rounded-3xl -translate-y-12 py-6 px-4 bg-white mx-auto container">

        <div className="flex justify-between items-center gap-3 font-bold text-sm">
        <Image
          alt="Main Logo"
          src="/mainLogo.png"
          className="w-[36px] md:w-[84px]"
        />
          <span className="flex md:hidden">Alquran</span>
        </div>
        <p className="max-w-xl md:ml-8 mt-5 md:mt-0 mb-2 md:mb-0">
          О alquran.ru Коран
          <br />
          главный источник ислама для всех мусульман. Эта священная книга
          разъясняет основы исламского вероучения, как то:
        </p>
        <div className="flex items-center justify-between md:justify-start w-full md:w-fit">
          <span className="md:mx-10 xl:mx-28">Copyright © 2025 AlQuran</span>
          <Image alt="" src="/logo.png" />
        </div>
      </div>
    </footer>
  );
}
