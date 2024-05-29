import BgPattern from "@/components/UI/BgPattern";
import PrimaryButton from "@/components/UI/Buttons/PrimaryButton";
import { Button, Link } from "@nextui-org/react";

export default function Page({ params }) {
  return (
    <div className="relative overflow-hidden">
      <BgPattern />

      <div className="mx-auto container flex flex-col items-center mb-20 md:mb-28 gap-16">

        <div className="bg-[#969696]/10 backdrop-blur-[1px] px-9 py-6 rounded-3xl">





    
          <div className="bg-white rounded-3xl">
            <h1 className="text-3xl md:text-4xl font-bold text-center md:text-left">Book Name</h1>
            <p className="text-sm leading-7 md:leading-9">
              Alquran Introduction Alquran Introduction Alquran Alquran
              Introduction Aquran Aon Alquran Alquran Introduction Alquran
              Introduction Alquran Alquran Introduction Alquran Introduction
              Alquran Alquran Introduction
            </p>

            <div className="flex mt-5 md:mt-20 gap-4 justify-between">
              <PrimaryButton title="See More" href="#" isFull />
              <Button
                className="bg-transparent text-yellow-primary border border-yellow-primary rounded-3xl w-full py-3 md:py-6 font-semibold"
                as={Link}
                href="#"
              >
                Details
              </Button>
            </div>
          </div>
  


            
        </div>
      </div>
    </div>
  );
}
