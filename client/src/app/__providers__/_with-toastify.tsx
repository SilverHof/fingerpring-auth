'use client'

import type { ReactNode } from 'react'
import { ToastContainer } from 'react-toastify'

export const WithToastify = ({ children }: { children: ReactNode }) => (
  <>
    {children}
    <ToastContainer position='bottom-right' closeButton={false} />
  </>
)
