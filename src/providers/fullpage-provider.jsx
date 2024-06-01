"use client";

import ReactPageScroller from "react-page-scroller";

export default function FullpageProvider({ children, screenWidth }) {
  return (
    // <ReactPageScroller animationTimer={screenWidth >= 768 ? 800 : 500}>
    //   {children}
    // </ReactPageScroller>

    <>
      {screenWidth >= 768 ? (
        <ReactPageScroller animationTimer={800}>{children}</ReactPageScroller>
      ) : (
         children
      )}
    </>
  );
}
