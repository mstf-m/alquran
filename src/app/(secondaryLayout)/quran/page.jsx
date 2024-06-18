import BgPattern from "@/components/UI/BgPattern";
import Breadcrumb from "@/components/UI/Breadcrumb";
import SurahCard from "@/components/UI/Cards/SurahCard";
import { Tabs, Tab } from "@nextui-org/react";

async function getData() {
  const res = await fetch(`${process.env.mainURL}/quran/v1/surah`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Page() {
  const data = await getData();

  // let tabs = [
  //   {
  //     id: "photos",
  //     label: "Photos",
  //     content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  //   },
  //   {
  //     id: "music",
  //     label: "Music",
  //     content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  //   },
  //   {
  //     id: "videos",
  //     label: "Videos",
  //     content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  //   }
  // ];

  return (
    <div className="relative overflow-hidden">
      <Breadcrumb />
      <BgPattern />
      <div className="mx-auto container mb-20 md:mb-28">
        {/* <Tabs aria-label="Dynamic tabs" items={tabs}>
        {(item) => (
          <Tab key={item.id} title={item.label}>
            <Card>
              <CardBody>
                {item.content}
              </CardBody>
            </Card>  
          </Tab>
        )}
      </Tabs> */}

        <div className="w-full flex flex-col items-center gap-10 py-12 px-12 shadow-[0_4px_4px_0_rgba(0,0,0,0.08)] backdrop-blur-[2px] rounded-3xl">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-6 md:gap-x-28 xl:gap-x-20 mt-2">
            {data.ayahs.map((obj, index) => (
              <SurahCard key={index} data={obj} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
