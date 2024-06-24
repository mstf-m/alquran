import BgPattern from "@/components/UI/BgPattern";
import BookCard from "@/components/UI/Cards/BookCard";
import { Pagination } from "@nextui-org/react";
import Breadcrumb from "@/components/UI/Breadcrumb";

async function getData() {
  const res = await fetch(`${process.env.mainURL}/wp/v2/posts`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Page() {
  const data = await getData();
  return (
    <div className="relative overflow-hidden">
      <Breadcrumb />
      <BgPattern />
      <div className="mx-auto container flex flex-col items-center mb-20 md:mb-28 gap-16">
        <div className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 md:gap-y-8 md:gap-x-10 mt-2">
          {data.map((obj, index) => (
            <BookCard
              key={index}
              id={obj.id}
              title={obj.title.rendered}
              imageURL={obj.img_url}
            />
          ))}
        </div>

        <Pagination
          isDisabled={false}
          total={5}
          initialPage={1}
          showShadow
          color="warning"
          loop
          showControls
          classNames={{
            wrapper: "",
            item: "text-blue-text",
            cursor: "bg-yellow-gradient text-blue-text",
          }}
        />
      </div>
    </div>
  );
}
