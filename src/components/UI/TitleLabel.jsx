import { SvgQuran } from "@/components/Svgs";

export default function TitleLabel({direction}) {
  return (
    <div className={`flex items-center max-w-fit gap-2 section-title mt-4 py-5 ${direction=='left'? 'rounded-s-full pl-4 pr-40' : ' rounded-e-full pr-4 pl-40'}`}>
      <SvgQuran />
      <h3 className="font-semibold text-blue-text text-2xl">Quran</h3>
    </div>
  );
}
