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
      <path d="M15 17H4l2-2v-4c0-4.8 4-6 6-6 4.8 0 6 4 6 6v4l2 2h-5Z"></path>
      <path d="M9 17v1c0 1 .6 3 3 3s3-2 3-3v-1"></path>
    </svg>
  );
}
