import FramerTrigger from "@/wrappers/FramerTrigger";
import Footer from "../UI/Footer";
import TitleLabel from "../UI/TitleLabel";

export default function Section2({ children, footer = false }) {
  return (
    <section className="pt-11 h-screen relative">
      <FramerTrigger position={1000}>
        {/* need change */}
        <div className="flex flex-col items-end bg-cream-gradient container float-right rounded-s-3xl">
          <TitleLabel direction='left'/>

          {/* need change */}
          <div className="flex border-[10px] border-black/10 rounded-3xl bg-card-gradient bg-white self-center translate-y-8">
            {children}
          </div>
        </div>
      </FramerTrigger>

      {footer ? <Footer /> : null}
    </section>
  );
}
