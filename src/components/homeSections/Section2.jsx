import FramerTrigger from "@/wrappers/FramerTrigger";
import Footer from "../UI/Footer";
import TitleLabel from "../UI/TitleLabel";

export default function Section2({ children, footer = false }) {
  return (
    <section className="h-screen md:pt-11">
      <FramerTrigger position={1000}>
        {/* need change */}
        <div className="flex flex-col items-end bg-cream-gradient container float-right md:rounded-s-3xl">
          <TitleLabel direction='left'/>

          {/* need change */}
          <div className="flex flex-col-reverse md:flex-row items-center md:items-start border-[10px] border-black/10 rounded-3xl bg-card-gradient bg-white self-center md:translate-y-8 mx-5 md:mx-0">
            {children}
          </div>
        </div>
      </FramerTrigger>

      {footer ? <Footer /> : null}
    </section>
  );
}
