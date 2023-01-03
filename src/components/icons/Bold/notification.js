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
      <path d="M6 11c0-4.8 4-6 6-6 4.8 0 6 4 6 6v4l2 2H4l2-2v-4Z"></path>
      <path
        fill-rule="evenodd"
        d="M12 2a1 1 0 0 1 1 1v1.055c2.174.247 3.665 1.296 4.612 2.61C18.66 8.123 19 9.84 19 11v3.586l1.707 1.707A1 1 0 0 1 20 18h-4c0 .66-.19 1.628-.788 2.46C14.576 21.341 13.526 22 12 22c-1.526 0-2.576-.658-3.212-1.54A4.35 4.35 0 0 1 8 18H4a1 1 0 0 1-.707-1.707L5 14.586V11c0-2.726 1.158-4.526 2.666-5.612C8.745 4.612 9.967 4.224 11 4.075V3a1 1 0 0 1 1-1Zm-2 16c0 .34.11.872.412 1.29.264.368.714.71 1.588.71.874 0 1.324-.342 1.588-.71.302-.418.412-.95.412-1.29h-4ZM8.834 7.012C7.842 7.726 7 8.926 7 11v4a1 1 0 0 1-.293.707L6.414 16h11.172l-.293-.293A1 1 0 0 1 17 15v-4c0-.84-.26-2.122-1.011-3.166C15.274 6.842 14.073 6 12 6c-.84 0-2.122.26-3.166 1.012Z"
        clip-rule="evenodd"
      ></path>
    </svg>
  );
}
