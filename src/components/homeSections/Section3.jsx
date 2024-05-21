import TitleLabel from "../UI/TitleLabel";

export default function Section3({ children }) {
  return (
    <section className="h-screen relative">
      <div className="bg-blue-gradient blur-2xl h-full w-full absolute top-0 left-0"></div>

      <div className="h-full bg-[url('/bg2.png')] bg-fill relative z-10">
       <TitleLabel direction='right'/>

        <div className="flex justify-center items-end gap-32 container mx-auto mt-8">
          {children}
        </div>
      </div>
    </section>
  );
}
