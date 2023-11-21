import { cn } from '../_utils/cn'

interface ProjectCardProps {
  children: React.ReactNode
}
export const ProjectCard = ({ children }: ProjectCardProps) => {
  return (
    <div className={cn('px-4 py-4 mb-6 w-full bg-zinc-300 text-black rounded-md')}>
      {children}
    </div>
  )
}
