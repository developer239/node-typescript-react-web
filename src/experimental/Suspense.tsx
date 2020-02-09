import React, { FC, Suspense as ReactSuspense, ReactNode } from 'react'

interface IProps {
  maxDuration?: number
  fallback: ReactNode
}

export const Suspense: FC<IProps> = ({ children, maxDuration, fallback }) => (
  // @ts-ignore
  <ReactSuspense maxDuration={maxDuration} fallback={fallback}>
    {children}
  </ReactSuspense>
)
