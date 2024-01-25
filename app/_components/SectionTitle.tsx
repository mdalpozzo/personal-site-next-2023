import { cn } from '../_utils/cn'

export const SectionTitle = ({ name, classNameText }: SectionTitleProps) => {
    return (
        <div className="inline-flex pl-4 pt-4">
            <p
                className={cn([
                    'text-white w-full rounded-sm px-2',
                    // 'dark:bg-gradient-to-t from-transparent to-neutral-800',
                    'border border-white border-solid',
                    'rounded-md',
                    classNameText,
                ])}
            >
                {name}
            </p>
        </div>
    )
}

interface SectionTitleProps {
    name: string
    classNameText?: string
}
