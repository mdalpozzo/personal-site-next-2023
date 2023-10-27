import Image from 'next/image'
import { CustomImage } from './_components/CustomImage'
import { SkillChip } from './_components/SkillChip'
import { NextLogo } from './_components/svgs/NextLogo'
import { ReactLogo } from './_components/svgs/ReactLogo'
import { DividerHorizontal } from './_components/DividerHorizontal'
import { DartLogo } from './_components/svgs/DartLogo'
import { JavaScriptLogo } from './_components/svgs/JavaScriptLogo'
import { TypeScriptLogo } from './_components/svgs/TypeScriptLogo'
import { FlutterLogo } from './_components/svgs/FlutterLogo'
import { FirebaseLogo } from './_components/svgs/FirebaseLogo'
import { GCPLogo } from './_components/svgs/GCPLogo'
import { AWSLogo } from './_components/svgs/AWSLogo'
import { StripeLogo } from './_components/svgs/StripeLogo'

const ICON_SIZE = 30

export default function Page() {
  return (
    <section className="w-full">
      <div className="min-h-[240px] h-[40vh] md:h-[30vh] w-full flex flex-row gap-6 md:gap-20">
        <div className="w-1/3 min-w-[120px] h-full relative bg-zinc-950">
          <CustomImage
            src="/images/marlin-portrait-photo.jpeg"
            alt="Personal Portrait"
            fill
            style={{ objectPosition: '50% 30%' }}
            className="aspect-video object-cover"
          />
        </div>

        <div className="w-full flex justify-center">
          <div className="flex flex-col justify-between">
            <div className="mb-10">
              <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl mb-8">
                marlin dalpozzo
              </h1>

              <p className="prose prose-neutral dark:prose-invert text-2xl md:text-3xl">
                developer, musician, explorer
              </p>
            </div>

            <p className="prose prose-neutral dark:prose-invert text-base">
              full stack developer with an emphasis on frontend/UX
            </p>
          </div>
        </div>
      </div>

      <DividerHorizontal />

      <div className="w-full flex flex-col">
        <p className="text-2xl inline-block mb-8">Languages</p>

        <div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="flex">
              <SkillChip
                iconHeight={ICON_SIZE}
                iconWidth={ICON_SIZE}
                Icon={JavaScriptLogo}
                src="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                name="JavaScript"
              />
            </div>
            <div className="flex">
              <SkillChip
                iconHeight={ICON_SIZE}
                iconWidth={ICON_SIZE}
                Icon={TypeScriptLogo}
                src="https://www.typescriptlang.org/"
                name="TypeScript"
              />
            </div>
            <div className="flex">
              <SkillChip
                iconHeight={ICON_SIZE}
                iconWidth={ICON_SIZE}
                Icon={DartLogo}
                src="https://dart.dev/"
                name="Dart"
              />
            </div>
          </div>
        </div>

        <DividerHorizontal />

        <p className="text-2xl inline-block mb-8 mt-10">Frameworks</p>

        <p className="text-base mb-4">Web</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="flex">
            <SkillChip
              iconHeight={ICON_SIZE}
              iconWidth={ICON_SIZE}
              Icon={ReactLogo}
              src="https://react.dev/"
              name="React"
            />
          </div>
          <div className="flex">
            <SkillChip
              iconHeight={ICON_SIZE}
              iconWidth={ICON_SIZE}
              Icon={NextLogo}
              src="https://nextjs.org/"
              name="Next.js"
            />
          </div>
        </div>

        <p className="text-base mb-4 mt-4">Mobile</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="flex">
            <SkillChip
              iconHeight={ICON_SIZE}
              iconWidth={ICON_SIZE}
              Icon={FlutterLogo}
              src="https://flutter.dev/"
              name="Flutter"
            />
          </div>
          <div className="flex">
            <SkillChip
              iconHeight={ICON_SIZE}
              iconWidth={ICON_SIZE}
              Icon={ReactLogo}
              src="https://reactnative.dev/"
              name="React Native"
            />
          </div>
        </div>

        <DividerHorizontal />

        <p className="text-2xl inline-block mb-8 mt-10">Tools</p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="flex">
            <SkillChip
              iconHeight={ICON_SIZE}
              iconWidth={ICON_SIZE}
              Icon={FirebaseLogo}
              src="https://firebase.google.com/"
              name="Firebase"
            />
          </div>
          <div className="flex">
            <SkillChip
              iconHeight={ICON_SIZE}
              iconWidth={ICON_SIZE}
              Icon={GCPLogo}
              src="https://cloud.google.com/"
              name="Google Cloud Platform (GCP)"
            />
          </div>
          <div className="flex">
            <SkillChip
              iconHeight={ICON_SIZE}
              iconWidth={ICON_SIZE}
              Icon={AWSLogo}
              src="https://aws.amazon.com/"
              name="Amazon Web Services (AWS)"
            />
          </div>
          <div className="flex">
            <SkillChip
              iconHeight={ICON_SIZE}
              iconWidth={ICON_SIZE}
              Icon={StripeLogo}
              src="https://stripe.com/"
              name="Stripe"
            />
          </div>
        </div>

        <DividerHorizontal />

        <p className="text-2xl inline-block mb-8 mt-10">Skills</p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="flex">
            <p>SEO</p>
          </div>
          <div className="flex">
            <p>CRO</p>
          </div>
          <div className="flex">
            <p>Affiliate Marketing</p>
          </div>
          <div className="flex">
            <p>E-commerce</p>
          </div>
          <div className="flex">
            <p>Analytics</p>
          </div>
        </div>
      </div>
    </section>
  )
}
