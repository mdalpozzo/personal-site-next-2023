import { v2 as cloudinary } from 'cloudinary'
import { NextRequest } from 'next/server'

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

export async function POST(req: NextRequest, res: Response) {
    console.log('getSignedUrl API called')

    const { ids } = (await req.json()) as { ids: string[] }

    if (
        !ids ||
        !Array.isArray(ids) ||
        ids.some((id) => typeof id !== 'string')
    ) {
        return new Response(
            'Invalid request: `ids` must be an array of strings.',
            { status: 400 }
        )
    }

    // Generate signed URLs for each ID and associate them with their IDs
    const urlObjects = ids.map((id: string) => {
        const url = cloudinary.url(id, { sign_url: true })
        return { id, url } // Create an object containing both the ID and the URL
    })

    // Respond with the array of url objects
    return new Response(JSON.stringify({ urls: urlObjects }), { status: 200 })
}
