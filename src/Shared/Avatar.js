import React from "react";

export default function Avatar() {
  return (
    <>
      <div className="flex justify-between items-center ml-6">
        <div class="flex items-center space-x-4">
          <img
            class="w-10 h-10 rounded-full"
            src="https://images.unsplash.com/photo-1678033950488-6628390612d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <div class="font-medium">
            <h1>Jese Leos</h1>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 mr-7 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.867 19.125h.008v.008h-.008v-.008z"
          />
        </svg>
      </div>
    </>
  );
}
