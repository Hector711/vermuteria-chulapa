import { IconProps } from "@/types";

export default function ChatbotIcon(props: IconProps) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icons icons-stroke"
      id="chatbot-icon"
      {...props}
    >
      <path d="M0 0h24v24H0z" stroke="none" />
      <path d="M18 4a3 3 0 013 3v8a3 3 0 01-3 3h-5l-5 3v-3H6a3 3 0 01-3-3V7a3 3 0 013-3h12zM9.5 9h.01M14.5 9h.01M9.5 13a3.5 3.5 0 005 0" />
    </svg>
  );
}

