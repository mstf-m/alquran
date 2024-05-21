import NextImage from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-neutral-color-800 absolute bottom-0">
      <div className="flex justify-center items-center shadow-[0_0_10px_0_rgba(88,88,88,0.25)] rounded-3xl -translate-y-12 py-6 mx-16 bg-white">
        <NextImage
          width={84}
          height={84}
          priority
          alt="Main Logo"
          src="/mainLogo.png"
        />
        <p className="max-w-xl ml-8">
          О alquran.ru Коран
          <br />
          главный источник ислама для всех мусульман. Эта священная книга
          разъясняет основы исламского вероучения, как то:
        </p>
        <span className="mx-28">Copyright © 2025 AlQuran</span>
        <NextImage width={42} height={42} priority alt="" src="/logo.png" />
      </div>
    </footer>
  );
}
