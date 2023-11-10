import { cn } from '../_utils/cn'

export const SectionTitle = ({ name, className }: SectionTitleProps) => {
  return (
    <div className="inline-flex">
      <p
        className={cn([
          'text-sm md:text-xl text-[#111010] font-bold px-1 w-2/3 rounded-sm',
          'dark:bg-gradient-to-r to-transparent from-neutral-400',
          className,
        ])}
      >
        {name}
      </p>
    </div>
  )
}

interface SectionTitleProps {
  name: string
  className?: string
}
