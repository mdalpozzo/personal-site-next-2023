import { Cloudinary } from '@cloudinary/url-gen'
import { AdvancedImage } from '@cloudinary/react'
import React, { useState } from 'react'

interface CloudinaryImageProps {
    cloudinaryId: string
    alt: string
    fadeIn?: boolean
    className?: string
    // Add any additional props for Cloudinary transformations here
}

const CloudinaryImage = ({
    cloudinaryId,
    alt,
    fadeIn,
    className,
}: CloudinaryImageProps) => {
    const [loaded, setLoaded] = useState(false)
    const cld = new Cloudinary({
        cloud: {
            cloudName: 'marlin-media', // Replace with your Cloudinary cloud name
        },
    })

    const myImage = cld.image(cloudinaryId)
    // Example transformation: resize to fill 250x250 area
    // You can customize this based on your needs
    // myImage.resize(fill().width(250).height(250));

    return (
        <div
            className={`w-full h-full ${className} ${
                !loaded && fadeIn ? 'animate-pulse' : ''
            }`}
        >
            <AdvancedImage
                cldImg={myImage}
                alt={alt}
                onLoad={() => setLoaded(true)}
            />
        </div>
    )
}

export default CloudinaryImage
