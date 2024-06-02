import { Button, Link } from "@nextui-org/react";
import React from "react";

export default function AyehCard({ data }) {
  return (
    <Button
      className="flex justify-between items-center border rounded-full bg-white hover:bg-[#00C1E8]/10 text-blue-primary py-3"
      as={Link}
      href='#'
    >
      <span className="rounded-full border-8 border-[#CCF3FA]">{data.number}</span>
      <div>
        <h3 className="">{data.name_en}</h3>
        <h4>{data.name_en_translation}</h4>
      </div>
      <div>
        <span>{data.type}</span>
      </div>
    </Button>
  );
}
