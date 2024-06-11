import BgPattern from "@/components/UI/BgPattern";
import PrimaryButton from "@/components/UI/Buttons/PrimaryButton";
import SecondaryButton from "@/components/UI/Buttons/SecondaryButton";
import CarouselBooks from "@/components/UI/Carousels/CarouselBooks";
import { Image } from "@nextui-org/react";
import Breadcrumb from "@/components/UI/Breadcrumb";

async function getData(id) {
  const res = await fetch(`${process.env.mainURL}/wp/v2/posts/${id}`)
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function Page({ params }) {

  const data = await getData(params.slug)

  return (
    <div>
    <Breadcrumb bookName={data.title.rendered}/>
    <div className="relative overflow-hidden">
      <BgPattern />

      <div className="mx-auto container flex flex-col items-center mb-20 md:mb-28 gap-12">
        <section className="flex w-full bg-[#969696]/10 backdrop-blur-[1px] md:px-9 md:py-6 rounded-2xl md:rounded-[32px] shadow-[0_0_8px_0_rgba(88,88,88,0.15)] mt-2 md:mt-0">
          <div className="flex w-full justify-center items-center flex-col md:flex-row p-6 lg:py-16 lg:px-28 gap-4 md:gap-16 lg:gap-28 bg-white rounded-3xl">
            <div className="flex justify-center pt-6 md:pt-0 w-full md:w-fit rounded-2xl border md:border-0 border-[#DEDEDE]">
              <Image src={data.img_url} className="min-w-52 lg:min-w-80" alt="" />
            </div>

            <div className="flex flex-col h-full justify-between max-w-lg">
              <div>
                <h1 className="text-4xl text-neutral-color-800">{data.title.rendered}</h1>
                <h2 className="text-sm font-bold mb-2 mt-8">By: Writer</h2>
             
                 <div className="text-sm h-full overflow-y-auto" dangerouslySetInnerHTML={{__html: data.excerpt.rendered}} />
             
              </div>

              <div className="flex my-4 gap-4">
                <PrimaryButton title="Buy Book" href="#" />
                <SecondaryButton title="Review" href="#" />
              </div>
            </div>
          </div>
        </section>

        <section className="hidden md:flex w-full bg-[#FFF5D8] backdrop-blur-[5px] px-9 py-6 rounded-3xl">
          <div className="flex flex-col w-full justify-center items-center pl-8 py-8 gap-7 overflow-hidden bg-white rounded-3xl">
          
              <CarouselBooks />
              <PrimaryButton title="See More" href="#" />
        
          </div>
        </section>
      </div>
    </div>
    </div>
  );
}
