import { Link, Button } from "@nextui-org/react";

export default function PrimaryButton({ title, href, isFull = false }) {
  return (
    <Button
      className={`bg-yellow-gradient text-blue-text rounded-3xl py-4 md:py-6 font-semibold ${
        isFull ? "w-full" : "px-16 w-fit"
      }`}
      as={Link}
      href={href}
    >
      {title}
    </Button>
  );
}
