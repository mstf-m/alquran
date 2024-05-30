import { Link, Button } from "@nextui-org/react";

export default function SecondaryButton({ title, href, isFull = false }) {
  return (
    <Button
      className={`bg-transparent text-yellow-primary border border-yellow-primary rounded-3xl py-3 md:py-6 font-semibold w-full md:w-fit ${
        isFull ? "md:w-full" : "md:px-16"
      }`}
      as={Link}
      href={href}
    >
      {title}
    </Button>
  );
}
