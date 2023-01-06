import React from "react";

export default function Mail({
  size = 18, // or any default size of your choice
  color = "black", // or any color of your choice
}) {
  return (
    <svg
      width={size}
      height={size}
      fill={color}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9 7h9v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7h3Z"></path>
      <path
        fillRule="evenodd"
        d="M8.035 6A3.5 3.5 0 0 1 11.5 3h1a3.5 3.5 0 0 1 3.465 3H20a1 1 0 1 1 0 2h-1v10a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V8H4a1 1 0 0 1 0-2h4.035Zm2.05 0h3.83A1.5 1.5 0 0 0 12.5 5h-1a1.5 1.5 0 0 0-1.415 1ZM7 8v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V8H7Z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
