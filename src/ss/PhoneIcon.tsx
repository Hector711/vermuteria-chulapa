import { IconProps } from '@/types';

export default function PhoneIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icons icons-stroke"
      id="phone-icon"
      {...props}
    >
      <path d="M0 0h24v24H0z" stroke="none" />
      <path d="M6 5a2 2 0 012-2h8a2 2 0 012 2v14a2 2 0 01-2 2H8a2 2 0 01-2-2V5zM11 4h2M12 17v.01" />
    </svg>
  )
}

