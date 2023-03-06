import React from "react";

export default function Time({ date }) {
  return (
    <div className="flex justify-center mt-2 mb-3">
      {date ? date : "12 Feb, 2022"}
    </div>
  );
}
