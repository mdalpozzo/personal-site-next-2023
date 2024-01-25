interface SpacerProps {
    height: number | string
    width: number | string
}
// TODO - unfinished. figure out how to play with tailwind nicely
export const Spacer = ({ height, width }: SpacerProps) => {
    return (
        <div
            style={{
                height,
                width,
            }}
        />
    )
}
