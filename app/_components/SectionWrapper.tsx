import { cn } from '../_utils/cn'

interface SectionWrapperProps {
    children: React.ReactNode
    className?: string
}

export const SectionWrapper = ({
    children,
    className,
}: SectionWrapperProps) => {
    return (
        <div
            className={cn(
                'dark:bg-gradient-to-t from-transparent to-neutral-800',
                className
            )}
        >
            {children}
        </div>
    )
}
