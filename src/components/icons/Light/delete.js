import React from "react";

export default function Mail({
  size = 18, // or any default size of your choice
  color = "black", // or any color of your choice
}) {
  return (
    <svg
      width={size}
      height={size}
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6 7v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7M9 7a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v0H9Zm0 0h6-6Zm0 0H6h3Zm6 0h3-3Zm5 0h-2 2ZM4 7h2-2Z"></path>
    </svg>
  );
}
