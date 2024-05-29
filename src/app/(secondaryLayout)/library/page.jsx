import BgPattern from "@/components/UI/BgPattern";
import BookCard from "@/components/UI/Cards/BookCard";
import { Pagination } from "@nextui-org/react";

export default function page() {
  return (
    <div className="relative overflow-hidden">
      <BgPattern />

      <div className="mx-auto container flex flex-col items-center mb-20 md:mb-28 gap-16">
        <div className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-y-8 justify-between mt-2">
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
        </div>

        <Pagination
          isDisabled={false}
          total={10}
          initialPage={1}
          showShadow
          color="warning"
          loop
          showControls
        />
      </div>
    </div>
  );
}
