'use client'

import React from "react";
import ReactPageScroller from "react-page-scroller";

export default function FullpageProvider({ children }) {
  return <ReactPageScroller animationTimer={800}>
    {children}
    </ReactPageScroller>;
}
