import { cn } from '../_utils/cn'

export const SectionTitle = ({ name, className }: SectionTitleProps) => {
  return (
    <div className="inline-flex">
      <p
        className={cn([
          'text-sm md:text-xl text-white pl-4 pt-4 w-full rounded-sm',
          'dark:bg-gradient-to-t to-transparent from-neutral-800',
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
