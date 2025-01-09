import { SVGProps } from 'react'

export const EmailIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={20}
    height={20}
    viewBox='0 0 20 20'
    fill='none'
    stroke='currentColor'
    strokeWidth={1.5}
    strokeLinecap='round'
    strokeLinejoin='round'
    {...props}
  >
    <rect x='2' y='3' width='16' height='14' rx='2' />
    <path d='M3 6l7 5 7-5' />
  </svg>
)
