import React from "react";

export default function DiscriptionCard({title, content, style}) {
  return (
    <div className={`rounded-2xl border-8 border-gray-50 p-4 md:p-6 text-blue-text bg-white ${style}`}>
      <h4 className="font-black">{title}</h4>
      <p className="text-xs">
        {content}
      </p>
    </div>
  );
}
