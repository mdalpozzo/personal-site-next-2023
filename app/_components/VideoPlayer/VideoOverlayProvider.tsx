'use client'

import { createContext, useContext, useState } from 'react'
import FullScreenOverlay from '../FullScreenOverlay'
import { CloudinaryVideoPlayer } from './CloudinaryVideoPlayer'

interface VideoOverlayContextType {
    showVideoOverlay: (
        path: string,
        { posterOffset }: { posterOffset?: number }
    ) => void
    hideVideoOverlay: () => void
}

const defaultContextValue: VideoOverlayContextType = {
    showVideoOverlay: () => {},
    hideVideoOverlay: () => {},
}

const VideoOverlayContext =
    createContext<VideoOverlayContextType>(defaultContextValue)

export const useVideoOverlay = () => useContext(VideoOverlayContext)

export const VideoOverlayProvider = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const [isVisible, setIsVisible] = useState(false)
    const [videoPath, setVideoPath] = useState('')
    const [posterOffset, _setPosterOffset] = useState<number>()

    const showVideoOverlay = (path: string) => {
        setVideoPath(path)
        setIsVisible(true)
    }

    const hideVideoOverlay = () => {
        setVideoPath('')
        setIsVisible(false)
    }

    return (
        <VideoOverlayContext.Provider
            value={{
                showVideoOverlay,
                hideVideoOverlay,
            }}
        >
            {children}
            {isVisible && videoPath && (
                <FullScreenOverlay onClose={hideVideoOverlay}>
                    <div className="w-full min-w-[300px] md:w-1/2 aspect-video mt-4">
                        <CloudinaryVideoPlayer
                            videoPath={videoPath}
                            posterOffset={posterOffset}
                        />
                    </div>
                </FullScreenOverlay>
            )}
        </VideoOverlayContext.Provider>
    )
}
