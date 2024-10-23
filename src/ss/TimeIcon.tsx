import { IconProps } from '@/types';

export default function TimeIcon(props: IconProps) {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth={1}
      strokeLinecap='round'
      strokeLinejoin='round'
      className='icons'
      {...props}
    >
      <path d='M0 0h24v24H0z' stroke='none' />
      <path d='M3 12a9 9 0 1018 0 9 9 0 10-18 0M12 12l2 3M12 7v5' />
    </svg>
  );
}
