import Link from 'next/link'
import { CustomImage } from '../_components/CustomImage'
import { DividerHorizontal } from '../_components/DividerHorizontal'

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="text-5xl">some of my favorite projects</h1>

      <DividerHorizontal />

      <p></p>

      <div className="h-10 w-10 relative">
        <Link href="https://www.cabana.life/">
          <CustomImage
            fill
            alt="Cabana Vans logo"
            src="/images/cabana-logo-512x512.png"
          />
        </Link>
      </div>
      <p className='text-2xl'>Cabana</p>
      <p className='mb-6'>
        luxury camper van rentals. proprietary customized Cabana vans complete
        with a shower, toilet, wifi, and a kitchen
      </p>
      <p>this was a fun project. </p>
      <p>small scrappy engineering team.</p>
      <p>
        we wrote an insane amount of code and busted out features at a blazing
        pace. we put in 200% on a daily basis to bring this amazing product to
        life
      </p>
    </div>
  )
}
