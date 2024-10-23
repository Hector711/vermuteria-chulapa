import { IconProps } from '@/types';

function StopWatch(props: IconProps) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icons"
      {...props}
    >
      <path d="M0 0h24v24H0z" stroke="none" />
      <path d="M5 13a7 7 0 1014 0 7 7 0 00-14 0zM14.5 10.5L12 13M17 8l1-1M14 3h-4" />
    </svg>
  )
}

export default StopWatch

