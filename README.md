## Tech Stack

    - NextJS
    - Contentful - CMS
    - Cloudinary - Media/asset storage
    - Vercel - Hosting

## Running Locally

This application requires Node.js v16.13+.

To run development build:

`npm run dev`

## Assets

Most assets are kept in cloudinary.

    - logos/icons
    - images
    - videos

## Content Configuration / CMS

Content is configured in Contentful

    - skills

## Videos

### One off video player usage

If you just need to create a video player you can create a single instances like so

```jsx
<CloudinaryVideoPlayer
    videoPath="cabana_demo_abridged_voiceover"
    posterOffset={110}
/>

// video loop on hover
<CloudinaryVideoPlayer
    videoPath="cabana_demo_abridged_voiceover"
    posterOffset={110}
    playOnHover
/>
```

### Video Overlay

If you need to a create dynamic video full screen modal/overlay you can use the VideoOverlayProvider. It has an instance of the video player built into it and exposes video controls via context. e.g. Portfolio section displays posters of short demo videos

Wrap app section that needs an instance of the VideoOverlayProvider

```tsx
<VideoOverlayProvider>{...children}</VideoOverlayProvider>
```

Usage

ClickableVideoPoster already makes use of the VideoOverlayProvider methods.

```tsx
<ClickableVideoPoster
    videoPath="cabana_demo_abridged_voiceover"
    posterOffset={110}
/>
```

If you need to create a different component you can use the existing context methods or add your own

```tsx
const { showVideoOverlay, hideVideoOverlay } = useVideoOverlay()
```

## Contact form

built with nodemailer and gmail api

.env file (1p) is required with to enable the contact email form.


## SVGs
Using https://react-svgr.com/playground/ to convert raw SVG to component type