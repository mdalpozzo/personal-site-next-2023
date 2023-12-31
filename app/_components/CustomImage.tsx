'use client'

import { cn } from '@/app/_utils/cn'
import Image from 'next/image'
import { useState } from 'react'

interface CustomImageProps extends React.ComponentProps<typeof Image> {
  fadeIn?: boolean
}

export const CustomImage = ({ alt, ...props }: CustomImageProps) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <div
      className={cn([
        'w-full h-full',
        // { 'animate-pulse': !loaded },
      ])}
    >
      <Image
        alt={alt}
        {...props}
        className={cn([
          'transition-opacity duration-[900ms] ease-in-out',
          {
            'opacity-100': loaded,
            'opacity-0': !loaded,
          },
          props.className,
        ])}
        onLoad={() => setLoaded(true)}
      />
    </div>
  )
}
