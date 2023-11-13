import Link from 'next/link'
import { CustomImage } from '../_components/CustomImage'
import { DividerHorizontal } from '../_components/DividerHorizontal'
import { CloudinaryVideoPlayer } from '../_components/VideoPlayer'

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="text-3xl md:text-5xl">some of my favorite projects</h1>

      <DividerHorizontal />

      <p></p>

      <Link
        href="https://www.cabana.life/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex flex-row items-center mb-6">
          <div className="h-16 w-16 min-w-16 flex-shrink-0 relative">
            <CustomImage
              fill
              alt="Cabana Vans logo"
              src="/images/cabana-logo-512x512.png"
            />
          </div>

          <div className="ml-4">
            <p className="text-2xl">Cabana</p>
            <p>
              luxury camper van rentals. proprietary customized Cabana vans
              complete with a shower, toilet, wifi, and a kitchen
            </p>
          </div>
        </div>
      </Link>

      <p className="mb-4">built with React and Flutter</p>
      <p>this was a fun project.</p>
      <p>small scrappy engineering team.</p>
      <p>
        we wrote an insane amount of code and busted out features at a blazing
        pace. we put in 200% on a daily basis to bring this amazing product to
        life
      </p>

      <div className="flex flex-row gap-2 mt-4">
        <p>mobile apps:</p>
        <Link
          href="https://apps.apple.com/us/app/cabana-vans/id1513401870"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="text-blue-300">iOS</p>
        </Link>
        <Link
          href="https://play.google.com/store/apps/details?id=com.vulog.carshare.sb.coya.prod&hl=en_US&gl=US"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="text-blue-300">android</p>
        </Link>
      </div>

      <p className="mt-4">
        Demo video of the 3 core applications built and maintained for Cabana
      </p>
      <div className="w-full md:w-1/2 aspect-video mt-4">
        <CloudinaryVideoPlayer
          videoPath="cabana_demo_abridged_voiceover"
          posterOffset={110}
        />
      </div>

      <DividerHorizontal />

      <Link
        href="https://www.sbunfiltered.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex flex-row items-center mb-6">
          <div className="h-16 w-16 flex-shrink-0 relative">
            <CustomImage
              fill
              alt="Santa Barbara Unfiltered logo"
              src="/images/sb-unfiltered-logo.png"
            />
          </div>

          <div className="ml-4">
            <p className="text-2xl">Santa Barbara Unfiltered</p>
            <p>
              Local lifestyle publication. The food, sights, and news of Santa
              Barbara.
            </p>
          </div>
        </div>
      </Link>
      <p className="mb-4">built with Next.js</p>
      <p>solo project from the ground up</p>
      <p>
        i built this site as a place for me and my wife to record and share our
        love for Santa Barbara
      </p>

      <DividerHorizontal />

      <Link href="https://sbgi.net/" target="_blank" rel="noopener noreferrer">
        <div className="flex flex-row items-center mb-6">
          <div className="h-16 w-28 flex-shrink-0 relative">
            <CustomImage
              fill
              alt="Komo News logo"
              src="/images/sinclair-broadcast-group-logo.svg"
            />
          </div>

          <div className="ml-4 items-center">
            <p className="text-2xl">
              Sinclair Broadcast Group - Local News properties
            </p>
            <p>
              Websites and mobile apps for local stations under the umbrella of
              Sinclair Broadcast Group
            </p>
          </div>
        </div>
      </Link>
      <p className="mb-4">built with React and React Native</p>
      <p>
        the Sinclair Digital team is responsible for creating and maintaining
        all the web based technology and applications for the 80+ local news
        stations owned by SBG
      </p>
      <p>
        i helped build a brand new hybrid mobile app using React Native and
        develop and maintain the existing web applications
      </p>
      <p>
        this was an interesting technological challenge. we built the apps using
        a white label approach. we had to build a single codebase that could be
        used by all the different stations. we had to build a system that could
        be easily configured to work with each station's unique branding and
        content.
      </p>
      <Link
        className="mt-4"
        href="https://komonews.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="text-blue-300">Komo News - Example Station</p>
      </Link>
      <div className="flex flex-row gap-2 mt-4">
        <p>mobile apps:</p>
        <Link
          href="https://apps.apple.com/us/app/komo-news-mobile/id433508161"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="text-blue-300">iOS</p>
        </Link>
        <Link
          href="https://play.google.com/store/apps/details?id=com.newssynergy.komo&hl=en_US&gl=US"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="text-blue-300">android</p>
        </Link>
      </div>
    </div>
  )
}
