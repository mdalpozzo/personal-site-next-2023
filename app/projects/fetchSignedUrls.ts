import { AppConfig } from '../appConfig'
import { SignedUrls } from './page'

async function fetchSignedUrls(cloudinaryIds: string[]): Promise<SignedUrls> {
    let response

    try {
        response = await fetch(
            `${AppConfig.APP_BASE_URL}/api/images/cloudinary/getSignedUrl`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ids: cloudinaryIds }),
            }
        )
    } catch (error) {
        console.error('fetchSignedUrls.Failed to fetch signed URLs', error)
        return {}
    }

    if (!response.ok) {
        throw new Error('fetchSignedUrls.Failed to fetch signed URLs')
    }

    const data = await response.json()
    const urlObjects = data?.urls // Assuming this is an array of objects with {id, url}

    if (!urlObjects || !Array.isArray(urlObjects)) {
        throw new Error('Invalid response format from server')
    }

    // Transform the array of objects into the SignedUrls mapping
    const signedUrls: SignedUrls = urlObjects.reduce(
        (acc: SignedUrls, { id, url }: { id: string; url: string }) => {
            if (id && url) {
                acc[id] = url
            }
            return acc
        },
        {}
    )

    return signedUrls
}

export { fetchSignedUrls }
