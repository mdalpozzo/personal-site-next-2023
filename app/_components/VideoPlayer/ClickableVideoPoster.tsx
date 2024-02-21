'use client'

import { CustomImage } from '../CustomImage'
import { useVideoOverlay } from './VideoOverlayProvider'

interface ClickableVideoPosterProps {
    videoPath: string
    posterOffset?: number
    posterUrl: string | undefined
    alt: string
}

export const ClickableVideoPoster = ({
    videoPath,
    posterOffset,
    posterUrl,
    alt,
}: ClickableVideoPosterProps) => {
    // TODO a close button?
    const { showVideoOverlay, hideVideoOverlay } = useVideoOverlay()

    if (!posterUrl) {
        console.log('No poster URL provided for video', videoPath)
        return <div>IMAGE ERROR</div>
    }

    return (
        <div
            className="w-full md:w-1/2 aspect-video mt-4"
            onClick={() => {
                showVideoOverlay(videoPath, {
                    posterOffset: posterOffset,
                })
            }}
        >
            <CustomImage src={posterUrl} alt={alt} fill unoptimized />
        </div>
    )
}
