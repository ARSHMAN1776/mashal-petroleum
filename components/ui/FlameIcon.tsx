import React from "react";

interface FlameIconProps {
  className?: string;
  size?: number;
}

export const FlameIcon: React.FC<FlameIconProps> = ({
  className = "text-mashal-gold",
  size = 20,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 2C10.5 4.5 9 7.2 9 9.5C9 11.2 10.3 12.5 12 12.5C13.7 12.5 15 11.2 15 9.5C15 7.2 13.5 4.5 12 2Z"
        fill="currentColor"
        opacity="0.95"
      />
      <path
        d="M12 7C9.2 9.8 7 13.2 7 16C7 18.8 9.2 21 12 21C14.8 21 17 18.8 17 16C17 13.2 14.8 9.8 12 7Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 15.5C11.17 15.5 10.5 16.17 10.5 17C10.5 17.83 11.17 18.5 12 18.5C12.83 18.5 13.5 17.83 13.5 17C13.5 16.17 12.83 15.5 12 15.5Z"
        fill="currentColor"
      />
    </svg>
  );
};
