'use client'

import { useVideoOverlay } from './VideoOverlayProvider'

interface ClickableVideoPosterProps {
    videoPath: string
    posterOffset?: number
}

export const ClickableVideoPoster = ({
    videoPath,
    posterOffset,
}: ClickableVideoPosterProps) => {
    // TODO a close button?
    const { showVideoOverlay, hideVideoOverlay } = useVideoOverlay()

    return (
        <div
            className="w-full md:w-1/2 aspect-video mt-4"
            onClick={() => {
                showVideoOverlay(videoPath, {
                    posterOffset: posterOffset,
                })
            }}
        ></div>
    )
}
