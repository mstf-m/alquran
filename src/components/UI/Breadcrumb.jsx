"use client";

import { usePathname } from "next/navigation";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function Breadcrumb({ bookName=null }) {
  const pathname = usePathname();
  let pathSegments = pathname.split("/");
  pathSegments[0] = "Home";

  return (
    <div className="mx-auto container">
      <div className="bg-gold-gradient rounded-2xl my-6 md:mt-20 md:mb-12 overflow-hidden">
        <div className="bg-[url('/bg3.png')]">
          <ul className="flex px-8 md:px-10 py-7 overflow-y-scroll">
            {pathSegments.map((segment, index) => (
              <li key={index} className="min-w-fit">
                {isNaN(segment)
                  ? // If the segment is not a number (e.g., it's the book name)
                    segment
                  : // If the segment is a number, replace it with the book name
                    bookName}
                {index < pathSegments.length - 1 && (
                  <HiArrowNarrowRight className="inline mx-3" />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
