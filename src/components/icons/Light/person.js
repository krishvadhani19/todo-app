import React from "react";

export default function Person({
  size = 18, // or any default size of your choice
  color = "black", // or any color of your choice
}) {
  return (
    <svg
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 20c0-3 4-3 6-5 1-1-2-1-2-6 0-3.333 1.333-5 4-5s4 1.667 4 5c0 5-3 5-2 6 2 2 6 2 6 5"
        fill={color}
      ></path>
    </svg>
  );
}
