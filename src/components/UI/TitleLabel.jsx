import { SvgQuran } from "@/components/Svgs";

export default function TitleLabel({direction}) {
  return (
    <div className={`flex items-center max-w-fit gap-2 md:section-title md:mt-4 py-3 md:py-5 ${direction=='left'? 'rounded-s-full pr-4 md:pl-4 md:pr-40' : 'rounded-e-full pl-4 md:pr-4 md:pl-40'}`}>
      <SvgQuran />
      <h3 className="font-semibold text-blue-text text-lg md:text-2xl">Quran</h3>
    </div>
  );
}
