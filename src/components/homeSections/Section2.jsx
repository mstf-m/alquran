import FramerTrigger from "@/wrappers/FramerTrigger";
import Footer from "../UI/Footer";
import TitleLabel from "../UI/TitleLabel";

export default function Section2({ children, footer = false, isJustifyStart=false }) {
  return (
    <section className="h-screen md:pt-11 relative flex flex-col">
      <FramerTrigger position={200} style={'h-full'}>
        {/* need change */}
        <div className="flex flex-col items-end bg-cream-gradient-mobile md:bg-cream-gradient container float-right md:rounded-s-3xl h-full md:h-fit">
          <TitleLabel direction='left'/>

          {/* need change */}
          <div className={`flex flex-col-reverse md:flex-row items-center md:items-start min-h-[80%] md:min-h-fit border-[10px] border-black/10 rounded-3xl bg-card-gradient bg-white self-center md:translate-y-8 ${isJustifyStart ? 'justify-start' : 'justify-center'}`}>
            {children}
          </div>
        </div>
      </FramerTrigger>

      {footer ? <Footer /> : null}
    </section>
  );
}
