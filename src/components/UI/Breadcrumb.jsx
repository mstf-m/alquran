"use client";

import { Link } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function Breadcrumb({ bookName = null }) {
  const pathname = usePathname();
  let pathRoutes = pathname.split("/");
  let pathSegments = pathname.split("/");
  pathSegments[0] = "Home";

  function RouteDetector(i) {
    let route = "";
    for (let j = 0; j <= i; j++) {
      route = route.concat(pathRoutes[j]);
      route = route.concat("/");
    }
    return route;
  }

  return (
    <div className="mx-auto container">
      <div className="bg-gold-gradient rounded-2xl my-6 md:mt-20 md:mb-12 overflow-hidden">
        <div className="bg-[url('/bg3.png')]">
          <ul className="flex px-8 md:px-10 py-7 overflow-y-scroll md:overflow-y-hidden">
            {pathSegments.map((segment, index) => (
              <li key={index} className="min-w-fit">
                {isNaN(segment) ? (
                  // If the segment is not a number (e.g., it's the book name)
                  <Link href={RouteDetector(index)} className="text-neutral-color-800 text-lg font-medium hover:text-neutral-color-600">{segment}</Link>
                ) : (
                  // If the segment is a number, replace it with the book name
                  bookName
                )}
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
