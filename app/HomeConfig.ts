import { SVGComponentProps } from '@type/SVGComponentProps'
import { JavaScriptLogo } from '@components/svgs/JavaScriptLogo'
import { NextLogo } from '@components/svgs/NextLogo'
import { ReactLogo } from '@components/svgs/ReactLogo'
import { DartLogo } from '@components/svgs/DartLogo'
import { TypeScriptLogo } from '@components/svgs/TypeScriptLogo'
import { FlutterLogo } from '@components/svgs/FlutterLogo'
import { FirebaseLogo } from '@components/svgs/FirebaseLogo'
import { GCPLogo } from '@components/svgs/GCPLogo'
import { AWSLogo } from '@components/svgs/AWSLogo'
import { StripeLogo } from '@components/svgs/StripeLogo'

export const HomeConfig: HomeConfig = {
  languages: [
    {
      name: 'JavaScript',
      linkURL: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      Icon: JavaScriptLogo,
    },
    {
      name: 'TypeScript',
      linkURL: 'https://www.typescriptlang.org/',
      Icon: TypeScriptLogo,
    },
    {
      name: 'Dart',
      linkURL: 'https://dart.dev/',
      Icon: DartLogo,
    },
  ],
  frameworks: {
    web: [
      {
        name: 'React',
        linkURL: 'https://reactjs.org/',
        Icon: ReactLogo,
      },
      {
        name: 'Next.js',
        linkURL: 'https://nextjs.org/',
        Icon: NextLogo,
      },
    ],
    mobile: [
      {
        name: 'Flutter',
        linkURL: 'https://flutter.dev/',
        Icon: FlutterLogo,
      },
      {
        name: 'React Native',
        linkURL: 'https://reactnative.dev/',
        Icon: ReactLogo,
      },
    ],
  },
  tools: [
    {
      name: 'Firebase',
      linkURL: 'https://firebase.google.com/',
      Icon: FirebaseLogo,
    },
    {
      name: 'Google Cloud Platform (GCP)',
      linkURL: 'https://cloud.google.com/',
      Icon: GCPLogo,
    },
    {
      name: 'Amazon Web Services (AWS)',
      linkURL: 'https://aws.amazon.com/',
      Icon: AWSLogo,
    },
    {
      name: 'Stripe',
      linkURL: 'https://stripe.com/',
      Icon: StripeLogo,
    },
  ],
}

interface HomeConfig {
  languages: Skill[]
  frameworks: {
    web: Skill[]
    mobile: Skill[]
  }
  tools: Skill[]
  skills?: Skill[]
}

interface Skill {
  name: string
  linkURL: string
  Icon: React.ComponentType<SVGComponentProps>
}
