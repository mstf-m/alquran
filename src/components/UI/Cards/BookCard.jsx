import { Button, Image, Link } from "@nextui-org/react";

export default function BookCard({ key, id, title, imageURL }) {
  return (
    <Button
      as={Link}
      href={`library/${id}`}
      className="flex flex-col h-full justify-between rounded-2xl shadow-[0_0_7px_0_rgba(0,0,0,0.2)] px-2 pb-2 mx-auto bg-whites"
    >
      <Image
        classNames="w-full"
        src={imageURL}
        alt=""
        className="object-cover px-6 pt-8"
        removeWrapper
      />
      <span className="w-full bg-blue-text/10 text-blue-text font-bold rounded-lg p-2 md:p-2 text-wrap overflow-hidden">
        {title}
      </span>
    </Button>
  );
}
