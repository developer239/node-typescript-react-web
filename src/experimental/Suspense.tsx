import React, { FC, Suspense, ReactNode } from 'react'

interface IProps {
  maxDuration?: number
  fallback: ReactNode
}

const SuspenseWrapper: FC<IProps> = ({ children, maxDuration, fallback }) => (
  // @ts-ignore
  <Suspense maxDuration={maxDuration} fallback={fallback}>
    {children}
  </Suspense>
)

export default SuspenseWrapper
