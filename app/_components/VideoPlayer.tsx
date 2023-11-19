'use client'

import { AdvancedImage, AdvancedVideo } from '@cloudinary/react'
import {
  Cloudinary,
  CloudinaryImage,
  CloudinaryVideo,
  Transformation,
} from '@cloudinary/url-gen'
import { fill } from '@cloudinary/url-gen/actions/resize'
import { useState } from 'react'
import { cn } from '../_utils/cn'
import Skeleton from '@mui/material/Skeleton'
import { VideoEdit, trim } from '@cloudinary/url-gen/actions/videoEdit'

interface CloudinaryVideoPlayerProps {
  videoPath: string
  posterOffset?: number
}

export const CloudinaryVideoPlayer = ({
  videoPath,
  posterOffset,
}: CloudinaryVideoPlayerProps) => {
  const [loading, setLoading] = useState(true)
  // Create and configure your Cloudinary instance.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'marlin-media',
    },
  })

  // Use the video with public ID, 'docs/walking_talking'.
  const cldVideo = cld.video(videoPath).quality('auto')
  // const cldPoster = new CloudinaryImage(`${videoPath}.jpg`)
  //   .addTransformation(
  //     new Transformation().videoEdit(trim().startOffset(posterOffset || '50%'))
  //   )
  //   .setAssetType('video')
  const cldPoster = cld
    .image(`${videoPath}.jpg`)
    .addTransformation(
      new Transformation().videoEdit(trim().startOffset(posterOffset || '50%'))
    )
    .setAssetType('video')

  // console.log('cldPoster: ', cldPoster)

  return (
    <div className="w-full h-full">
      {/* {loading && <Skeleton className="w-full h-full" />} */}
      <AdvancedVideo
        // className={cn(loading ? 'hidden' : '')}
        cldPoster={cldPoster}
        // cldPoster={'auto'}
        onLoadedData={() => setLoading(false)}
        cldVid={cldVideo}
        controls
      />
    </div>
  )
}
