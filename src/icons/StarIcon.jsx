import * as React from 'react';
const gradientSVG = false;

export default function StarIcon(props) {
  if (gradientSVG) {
    return (
      <svg
        viewBox='0 0 24 24'
        fill='none'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
        className='icons'
        {...props}
      >
        <defs>
          <linearGradient id='gradient' x1='0%' y1='0%' x2='190%' y2='190%'>
            <stop offset='0%' stopColor='#e1c006' stopOpacity={1} />
            <stop offset='100%' stopColor='#ff0707' stopOpacity={1} />
          </linearGradient>
        </defs>
        <path d='M0 0h24v24H0z' stroke='none' />
        <path
          d='M12 17.75l-6.172 3.245 1.179-6.873-5-4.867 6.9-1 3.086-6.253 3.086 6.253 6.9 1-5 4.867 1.179 6.873z'
          stroke='url(#gradient)'
        />
      </svg>
    );
  } else {
    return (
      <svg
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth={2.5}
        strokeLinecap='round'
        strokeLinejoin='round'
        className='icons'
        {...props}
      >
        <path d='M0 0h24v24H0z' stroke='none' />
        <path d='M12 17.75l-6.172 3.245 1.179-6.873-5-4.867 6.9-1 3.086-6.253 3.086 6.253 6.9 1-5 4.867 1.179 6.873z' stroke='#f9b61b' />
      </svg>
    );
  }
}

