import { SVGProps } from 'react'

export const ArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth={2}
    strokeLinecap='round'
    strokeLinejoin='round'
    {...props}
  >
    <circle cx={12} cy={12} r={10} />
    <polyline points='14 16 10 12 14 8' />
  </svg>
)
