"use client";

import { usePathname } from "next/navigation";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function Breadcrumb() {
  const pathname = usePathname();
  let pathSegments = pathname.split("/");
  pathSegments[0] = "Home";

  return (
    <div className="mx-auto container bg-gold-gradient rounded-2xl my-6 md:mt-20 md:mb-12 overflow-hidden">
      <div className="bg-[url('/bg3.png')]">

      <ul className="flex px-8 md:px-10 py-7">
        {pathSegments.map((segment, index) => (
          <li key={index}>
            {segment}
            {index < pathSegments.length - 1 && (
              <HiArrowNarrowRight className="inline mx-3" />
            )}
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}
