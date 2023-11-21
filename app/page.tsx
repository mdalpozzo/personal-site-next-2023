import Image from 'next/image'
import { CustomImage } from './_components/CustomImage'
import { SkillChip } from './_components/SkillChip'
import { DividerHorizontal } from './_components/DividerHorizontal'
import { HomeConfig } from './HomeConfig'
import { cn } from '@utils/cn'
import { SectionTitle } from './_components/SectionTitle'

// const ICON_SIZE = {
//   mobile: 30,
//   desktop: 70,
// }
const ICON_SIZE = 30

export default function Page() {
    return (
        <section className="w-full">
            <div className="min-h-[240px] h-[40vh] md:h-[30vh] w-full flex flex-row gap-6 md:gap-20">
                <div className="w-1/3 min-w-[120px] h-full relative">
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
                                full stack javascript developer
                            </p>
                        </div>

                        <p className="prose prose-neutral dark:prose-invert text-base">
                            i'm a full stack developer with an emphasis on
                            frontend/UX
                        </p>
                    </div>
                </div>
            </div>

            <DividerHorizontal />

            <div className="w-full flex flex-col">
                <p className="text-2xl inline-block mb-8">Languages</p>

                <div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {HomeConfig.languages.map((skill) => {
                            const { Icon, linkURL, name } = skill

                            return (
                                <div key={name} className="flex">
                                    <SkillChip
                                        Icon={Icon}
                                        src={linkURL}
                                        name={name}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>

                <DividerHorizontal />

                <p className="text-2xl inline-block mb-6 mt-4 md:mt-10">
                    Frameworks
                </p>

                <SectionTitle name="Web" className="text-xl md:text-2xl mb-8" />
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {HomeConfig.frameworks.web.map((skill) => {
                        const { Icon, linkURL, name } = skill

                        return (
                            <div key={name} className="flex">
                                <SkillChip
                                    Icon={Icon}
                                    src={linkURL}
                                    name={name}
                                />
                            </div>
                        )
                    })}
                </div>

                <SectionTitle
                    name="Mobile"
                    className="text-xl md:text-2xl mb-8 mt-4 md:mt-10"
                />
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {HomeConfig.frameworks.mobile.map((skill) => {
                        const { Icon, linkURL, name } = skill

                        return (
                            <div key={name} className="flex">
                                <SkillChip
                                    Icon={Icon}
                                    src={linkURL}
                                    name={name}
                                />
                            </div>
                        )
                    })}
                </div>

                <DividerHorizontal />

                <p className="text-2xl inline-block mb-8 mt-4 md:mt-10">
                    Tools
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {HomeConfig.tools.map((skill) => {
                        const { Icon, linkURL, name } = skill

                        return (
                            <div key={name} className="flex">
                                <SkillChip
                                    Icon={Icon}
                                    src={linkURL}
                                    name={name}
                                />
                            </div>
                        )
                    })}
                </div>

                <DividerHorizontal />

                <p className="text-2xl inline-block mb-8 mt-4 md:mt-10">
                    Skills
                </p>

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
