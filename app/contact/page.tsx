import Link from 'next/link'
import { CustomImage } from '../_components/CustomImage'
import { DividerHorizontal } from '../_components/DividerHorizontal'
import { EmailContactForm } from '../_components/EmailContactForm'

interface SocialLinkConfig {
    name: string
    url: string
    imagePath: string
}

const socialLinks: SocialLinkConfig[] = [
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/marlin-dalpozzo/',
        imagePath: '/images/external/LI-Logo.png',
    },
    {
        name: 'GitHub',
        url: 'https://github.com/mdalpozzo',
        imagePath: '/images/external/github-mark-white.png'
    }
]

interface SocialLinkProps {
    imagePath: string
    url: string
    name: string
}

const SocialLink = ({ imagePath, url, name }: SocialLinkProps) => {
    return (
        <Link className='flex mb-2 bg-slate-600 hover:bg-green-200 p-2 rounded-md justify-center items-center' href={url}>
            <div className="w-24 md:w-32 h-10 md:h-20 relative">
                <CustomImage fill alt={name} src={imagePath} className='object-contain' />
            </div>
        </Link>
    )
}

export default function ContactPage() {
    return (
        <div>
            <h1 className="text-3xl md:text-5xl">contact me</h1>

            <DividerHorizontal />

            <div className='grid grid-cols-1 md:grid-cols-2 md gap-2 justify-center items-center'>
                <div className='flex flex-col h-full'>
                    <div className='md:flex md:flex-col grid grid-cols-2 gap-6 h-full w-full justify-evenly items-center'>

                        {socialLinks.map((link) => {
                            return (
                                <SocialLink
                                    key={link.name}
                                    imagePath={link.imagePath}
                                    url={link.url}
                                    name={link.name}
                                />
                            )
                        })}
                    </div>
                </div>

                <div>
                    <p className='text-2xl mt-6 md:mt-0 md:text-xl font-bold mb-4'>send me an email</p>

                    <EmailContactForm />
                </div>
            </div>
        </div>
    )
}
