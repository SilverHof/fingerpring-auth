import { SVGProps } from 'react'

export const ErrorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M2 2L9 9M9 9L16 16M9 9L16 2M9 9L2 16' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' />
  </svg>
)
