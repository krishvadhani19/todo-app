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
      <path d="M4.031 3 3 4.031l16.969 16.97L21 19.968 4.031 3Z"></path>
      <path d="m12.156 9.008 2.84 2.839a3.004 3.004 0 0 0-2.84-2.84Z"></path>
      <path d="m11.843 14.995-2.84-2.839a3.003 3.003 0 0 0 2.84 2.84Z"></path>
      <path d="M12 16.496a4.5 4.5 0 0 1-4.34-5.688L4.421 7.57C3.099 8.782 1.839 10.362.75 11.996c1.238 2.063 2.933 4.183 4.697 5.4 2.024 1.393 4.225 2.1 6.542 2.1a10.935 10.935 0 0 0 3.714-.647l-2.513-2.512c-.388.106-.788.16-1.19.16Z"></path>
      <path
        d="M12 7.5a4.5 4.5 0 0 1 4.34 5.688l3.312 3.312c1.367-1.23 2.629-2.886 3.598-4.5-1.237-2.036-2.949-4.151-4.743-5.382-2.05-1.405-4.243-2.118-6.519-2.118a10.45 10.45 0 0 0-3.666.67l2.49 2.49c.387-.107.786-.16 1.188-.16Z"
        fill={color}
      ></path>
    </svg>
  );
}
