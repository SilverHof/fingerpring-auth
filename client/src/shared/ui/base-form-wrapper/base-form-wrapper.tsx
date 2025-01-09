'use client'

import { ReactNode } from 'react'

export const BaseFormWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className='min-h-screen flex items-center justify-center relative bg-gradient-to-b from-[#202124] to-[#1A1B1E]'>
      <div
        className='absolute inset-0 w-full h-full pointer-events-none'
        style={{
          backgroundSize: '40px 40px',
          backgroundImage: `
            linear-gradient(to right, rgba(50, 50, 50, 0.2) 0.5px, transparent 1px),
            linear-gradient(to bottom, rgba(50, 50, 50, 0.2) 0.5px, transparent 1px)
          `,
        }}
      />
      {children}
    </div>
  )
}
