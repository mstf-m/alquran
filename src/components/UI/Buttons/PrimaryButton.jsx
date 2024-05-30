import { Link, Button } from "@nextui-org/react";

export default function PrimaryButton({ title, href, isFull = false }) {
  return (
    <Button
      className={`bg-yellow-gradient text-blue-text border border-yellow-primary rounded-3xl py-3 md:py-6 font-semibold w-full md:w-fit ${
        isFull ? "md:w-full" : "md:px-16"
      }`}
      as={Link}
      href={href}
    >
      {title}
    </Button>
  );
}
