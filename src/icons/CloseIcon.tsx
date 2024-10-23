import { IconProps } from "@/types";

export default function CloseIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icons icons-stroke"
      id="close-icon"
      {...props}
    >
      <path d="M0 0h24v24H0z" stroke="none" />
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  )
}
