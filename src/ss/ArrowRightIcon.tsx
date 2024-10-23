import { IconProps } from '@/types';

export default function ArrowRightIcon(props: IconProps) {
  return (
    <svg
      viewBox='-0.5 -0.5 16 16'
      className='icons'
      id='arrow-left-icon'
      {...props}
    >
      <path
        className='icons-fill'
        d='M14.725 8.162a.939.939 0 000-1.327l-3.75-3.75a.939.939 0 00-1.328 1.327l2.15 2.15H.938a.936.936 0 100 1.875h10.86l-2.15 2.15a.939.939 0 001.328 1.328l3.75-3.75z'
      />
    </svg>
  );
}
