import Link from 'next/link'
import React from 'react'

interface SkillChipProps {
  src: string
  Icon: React.ComponentType<{ width: number; height: number }>
  name: string
  iconHeight: number
  iconWidth: number
}

export const SkillChip = ({
  src,
  Icon,
  name,
  iconHeight,
  iconWidth,
}: SkillChipProps) => {
  return (
    <Link
      href={src}
      className="flex flex-row gap-2 justify-center items-center"
    >
      <Icon height={iconHeight} width={iconWidth} />
      <p className="p-0 m-0">{name}</p>
    </Link>
  )
}
