'use client'

import { AdvancedVideo } from '@cloudinary/react'
import { Cloudinary, Transformation } from '@cloudinary/url-gen'
import { trim } from '@cloudinary/url-gen/actions/videoEdit'
import { useState } from 'react'

interface CloudinaryVideoPlayerProps {
    videoPath: string
    posterOffset?: number
    playOnHover?: boolean
}

export const CloudinaryVideoPlayer = ({
    videoPath,
    posterOffset,
    playOnHover = false,
}: CloudinaryVideoPlayerProps) => {
    const [loading, setLoading] = useState(true)
    const [isHovered, setIsHovered] = useState(false)

    const cld = new Cloudinary({
        // TODO: Move to env config
        cloud: {
            cloudName: 'marlin-media',
        },
    })

    const cldVideo = cld.video(videoPath).quality('auto')

    const cldPoster = cld
        .image(`${videoPath}.jpg`)
        .addTransformation(
            new Transformation().videoEdit(
                trim().startOffset(posterOffset || '50%')
            )
        )
        .setAssetType('video')

    return (
        <div
            className="w-full h-full"
            onMouseOver={() => playOnHover && setIsHovered(true)}
            onMouseOut={() => playOnHover && setIsHovered(false)}
        >
            <AdvancedVideo
                cldVid={cldVideo}
                cldPoster={cldPoster}
                controls
                autoPlay={isHovered} // Control autoplay based on hover state
                loop={playOnHover && isHovered} // Ensure video loops if playOnHover is true and is currently hovered
                muted // Keep muted for autoplaying videos
                style={{ width: '100%', height: 'auto' }}
                onLoadedData={() => setLoading(false)}
            />
        </div>
    )
}
