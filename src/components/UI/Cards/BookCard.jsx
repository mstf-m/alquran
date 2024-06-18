import { Button, Image, Link } from "@nextui-org/react";

export default function BookCard({key, id, title, imageURL}) {
  return (
    <div className="rounded-2xl shadow-[0_0_7px_0_rgba(0,0,0,0.2)] max-w-fit px-2 pb-2 mx-auto bg-whites">
      <Image
        classNames='w-full'
        src={imageURL}
        alt=""
        className="object-cover px-6 pt-8"
        removeWrapper
      />
      <Button
        className="w-full bg-blue-text/10 text-blue-text font-bold rounded-lg px-12 py-4 text-wrap text-justify"
        as={Link}
        href={`library/book/${id}`}
        // href={{
        //   pathname: `library/book/${title}`,
        //   query: { title: title, imageURL: imageURL},
        // }}
      >
        {title}
      </Button>
    </div>
  );
}
