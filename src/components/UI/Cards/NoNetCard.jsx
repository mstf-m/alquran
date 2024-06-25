import { SvgNoNet } from "@/components/Svgs";
import { Button } from "@nextui-org/react";

export default function NoNetCard() {
  return (
    <div className="flex flex-col items-center mt-6">
      <div className="max-w-40 w-full">
        <SvgNoNet />
      </div>

      <span className="text-xl block my-3">
        Please check your network connection
      </span>
      <Button onPress={() => window.location.reload()}>Refresh</Button>
    </div>
  );
}
