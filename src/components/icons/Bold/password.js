import React from "react";

export default function Mail({
  size = 18, // or any default size of your choice
  color = "black", // or any color of your choice
}) {
  return (
    <svg
      width={size}
      height={size}
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" fill={color}></path>
      <path
        d="M23.01 11.184c-1.241-1.918-2.85-3.547-4.654-4.712C16.36 5.182 14.157 4.5 11.985 4.5c-1.993 0-3.953.57-5.825 1.693-1.91 1.145-3.64 2.818-5.141 4.972a1.496 1.496 0 0 0-.03 1.666c1.238 1.937 2.83 3.569 4.606 4.718 2 1.295 4.151 1.951 6.39 1.951 2.19 0 4.397-.676 6.384-1.956 1.803-1.16 3.41-2.796 4.645-4.73a1.51 1.51 0 0 0-.005-1.63ZM12 16.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Z"
        fill={color}
      ></path>
    </svg>
  );
}
