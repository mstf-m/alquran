import Image from "next/image";
import { Button } from "@nextui-org/button";

export default function Home() {
  return (
    <main>
      <Image src="/bg1.png" layout="fill" quality={100} priority />
      <div>
        <Button >Click me</Button>
      </div>
    </main>
  );
}
