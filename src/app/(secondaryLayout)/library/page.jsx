import BookCard from "@/components/UI/Cards/BookCard";

export default function page() {
  return (
    <div className="mx-auto container grid grid-cols-2 md:grid-cols-4 gap-5 mdgap-y-8 justify-between mb-20 md:mb-28">
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
    </div>
  );
}
