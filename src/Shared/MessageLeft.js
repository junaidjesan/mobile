import React from "react";

export default function MessageLeft({text}) {
  return (
    <>
      <div className="ml-7 mr-16 mb-3 rounded-xl bg-[#373E4E] inline-block px-4 py-2 max-w-32 w-auto">{text? text: "Check your permissions: If the repository belongs"}</div>
    </>
  );
}
