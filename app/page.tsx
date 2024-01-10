import Image from 'next/image'

export default function Page() {
  return (
    <section className="w-full">
      <div className="min-h-[240px] h-[40vh] md:h-[30vh] w-full flex flex-row gap-20">
        <div className="w-1/3 min-w-[120px] h-full relative bg-blue-300">
          <Image
            alt="Personal Portrait"
            fill
            objectFit="cover"
            objectPosition="50% 30%"
            src="/images/marlin-portrait-photo.jpeg"
            className="aspect-video"
          />
        </div>

        <div className="w-full flex justify-center">
          <div className="flex flex-col justify-between">
            <div className="mb-10">
              <h1 className="font-bold text-6xl mb-8">marlin dalpozzo</h1>

              <p className="prose prose-neutral dark:prose-invert text-3xl">
                developer, musician, explorer
              </p>
            </div>

            <p className="prose prose-neutral dark:prose-invert text-xl">
              full stack developer with an emphasis on frontend/UX
            </p>
          </div>
        </div>
      </div>

      <div className="h-[1px] w-full my-10 bg-zinc-400" />

      <div className="w-full flex justify-center">
        <p className="text-3xl inline-block">my main tools</p>
      </div>
    </section>
  )
}
