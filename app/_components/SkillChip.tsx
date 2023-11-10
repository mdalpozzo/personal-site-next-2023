import Link from 'next/link'
import React from 'react'
import { SVGComponentProps } from '@type/SVGComponentProps'

interface SkillChipProps {
  src: string
  Icon: React.ComponentType<SVGComponentProps>
  name: string
}

export const SkillChip = ({ src, Icon, name }: SkillChipProps) => {
  return (
    <Link
      href={src}
      className="flex flex-row gap-2 md:gap-6 justify-center items-center"
    >
      <Icon className="h-12 w-12 md:h-20 md:w-20" />
      <p className="md:text-lg">{name}</p>
    </Link>
  )
}
