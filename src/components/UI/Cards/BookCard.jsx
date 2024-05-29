import { Button, Image, Link } from "@nextui-org/react";

export default function BookCard() {
  return (
    <div className="rounded-2xl shadow-[0_0_7px_0_rgba(0,0,0,0.2)] max-w-fit px-2 pb-2 mx-auto bg-white">
      <Image
        src="/book.png"
        alt=""
        className="object-cover px-6 pt-8"
        removeWrapper
      />
      <Button
        className="w-full bg-blue-text/10 text-blue-text text-lg font-bold rounded-lg px-12 py-4"
        as={Link}
        href="#"
      >
        Book Title
      </Button>
    </div>
  );
}
