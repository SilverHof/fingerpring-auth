import { SVGProps } from 'react'

export const OTPIcon = (props: SVGProps<SVGSVGElement>) => (
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
    <circle cx='10' cy='10' r='8' />
    <path d='M10 6v4l2 2' />
  </svg>
)
