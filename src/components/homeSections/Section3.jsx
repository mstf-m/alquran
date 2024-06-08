import TitleLabel from "../UI/TitleLabel";

export default function Section3({ children }) {
  return (
    <section className="h-screen relative overflow-hidden">
      <div className="md:bg-blue-gradient bg-blue-gradient-mobile blur-2xl h-full w-full absolute top-0 left-0"></div>

      <div className="h-full bg-[url('/bg2.png')] relative z-10">
       <TitleLabel direction='right'/>

        <div className="flex flex-col sm:flex-row justify-center items-center md:items-end gap-4 md:gap-32 sm:container sm:mx-auto mx-4 md:mt-8">
          {children}
        </div>
      </div>
    </section>
  );
}
