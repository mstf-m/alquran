import { Image } from "@nextui-org/react";

export default function BookCard() {
  return (
    <div className="p-6 rounded-3xl shadow-[0_0_7px_0_rgba(0,0,0,0.2)] max-w-fit">
      <Image src="/book.png" alt="" className="object-cover" removeWrapper />
      <h5 className="text-center mt-4">Writer</h5>
    </div>
  );
}
