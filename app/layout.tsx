import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#09090b' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://piyush07.me'),
  title: {
    default: 'Piyush Gangwar | Full Stack MERN & AI Developer Portfolio',
    template: '%s | Piyush Gangwar',
  },
  description:
    'Official portfolio of Piyush Gangwar (PIYUSH0-7). Full Stack MERN Developer, Python DSA specialist, and Agentic AI Engineer. Discover full-stack projects, mobile apps, and creations.',
  keywords: [
    'Piyush Gangwar',
    'Piyush',
    'Piyush portfolio',
    'piyush07',
    'piyush07.me',
    'PIYUSH0-7',
    'Full Stack Developer',
    'MERN Stack Developer',
    'React Developer',
    'Node.js Developer',
    'Python DSA',
    'Agentic AI',
    'AI Developer',
    'ABES Engineering College',
    'Software Engineer',
    'Web Developer Ghaziabad',
    'Bareilly',
    'Delhi NCR',
    'India',
    'Academia 077',
    'Krishna07',
    'Saksham07',
  ],
  authors: [{ name: 'Piyush Gangwar', url: 'https://piyush07.me' }],
  creator: 'Piyush Gangwar',
  publisher: 'Piyush Gangwar',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://piyush07.me/',
    languages: {
      'x-default': 'https://piyush07.me/',
      en: 'https://piyush07.me/',
      hi: 'https://piyush07.me/',
    },
  },
  openGraph: {
    type: 'profile',
    locale: 'en_US',
    url: 'https://piyush07.me/',
    siteName: 'Piyush Gangwar Portfolio',
    title: 'Piyush Gangwar | Full Stack MERN & AI Developer',
    description:
      'Portfolio of Piyush Gangwar: Full Stack MERN Developer, Python DSA specialist, and Agentic AI Engineer. Discover projects, learning paths, and skills.',
    images: [
      {
        url: 'https://piyush07.me/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Piyush Gangwar - Full Stack & AI Developer Portfolio',
        type: 'image/png',
      },
    ],
    firstName: 'Piyush',
    lastName: 'Gangwar',
    username: 'PIYUSH0-7',
    gender: 'male',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Piyush Gangwar | Full Stack MERN & AI Developer',
    description:
      'Portfolio of Piyush Gangwar: Full Stack MERN Developer, Python DSA specialist, and Agentic AI Engineer. Discover projects, skills, and creations.',
    creator: '@PIYUSH0_7',
    images: ['https://piyush07.me/og-image.png'],
  },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/profile.jpg' }],
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'gEvZIklDj-JMeawIe2J_qvweyoSxeXlk7BVG4eexugo',
  },
  other: {
    'geo.region': 'IN-UP',
    'geo.placename': 'Ghaziabad, Uttar Pradesh, India',
    'geo.position': '28.6692;77.4538',
    ICBM: '28.6692, 77.4538',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://piyush07.me/#person',
      name: 'Piyush Gangwar',
      alternateName: ['Piyush', 'PIYUSH0-7', 'piyush07'],
      url: 'https://piyush07.me',
      image: 'https://piyush07.me/profile.jpg',
      jobTitle: 'Full Stack & AI Developer',
      description:
        'B.Tech IT student at ABES Engineering College building expertise in MERN stack, Python-based DSA, cross-platform mobile apps, and Agentic AI workflows.',
      email: 'mailto:gangwarpiyush827@gmail.com',
      telephone: '+918923845912',
      nationality: 'Indian',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Ghaziabad',
        addressRegion: 'Uttar Pradesh',
        addressCountry: 'IN',
      },
      alumniOf: [
        {
          '@type': 'EducationalOrganization',
          name: 'ABES Engineering College, Ghaziabad',
          url: 'https://abes.ac.in/',
        },
        {
          '@type': 'EducationalOrganization',
          name: 'Jingle Bells Public School, Bareilly',
          url: 'https://www.jbsbareilly.com/',
        },
      ],
      sameAs: [
        'https://github.com/PIYUSH0-7',
        'https://www.linkedin.com/in/piyush077/',
        'https://piyush07.me',
      ],
      knowsAbout: [
        'Full Stack Development',
        'MERN Stack',
        'React.js',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Python',
        'Data Structures & Algorithms',
        'React Native',
        'Agentic AI',
        'TypeScript',
        'Tailwind CSS',
        'Docker',
        'REST APIs',
        'Expo',
        'Firebase',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://piyush07.me/#website',
      url: 'https://piyush07.me/',
      name: 'Piyush Gangwar - Developer Portfolio',
      description: 'Official developer portfolio and showcase for Piyush Gangwar.',
      publisher: {
        '@id': 'https://piyush07.me/#person',
      },
      inLanguage: ['en', 'hi', 'ta', 'ja'],
    },
    {
      '@type': 'ProfilePage',
      '@id': 'https://piyush07.me/#webpage',
      url: 'https://piyush07.me/',
      name: 'Piyush Gangwar | Full Stack MERN & AI Developer Portfolio',
      isPartOf: {
        '@id': 'https://piyush07.me/#website',
      },
      about: {
        '@id': 'https://piyush07.me/#person',
      },
      mainEntity: {
        '@id': 'https://piyush07.me/#person',
      },
    },
    {
      '@type': 'ItemList',
      name: 'Featured Software Projects',
      itemListElement: [
        {
          '@type': 'SoftwareSourceCode',
          position: 1,
          name: 'Academia 077 (Smart Student Assistant App)',
          description:
            'AI lecture-note generator that records audio, sends to LLM, and converts into structured notes, with automated attendance tracking.',
          codeRepository: 'https://github.com/PIYUSH0-7',
        },
        {
          '@type': 'SoftwareSourceCode',
          position: 2,
          name: 'Krishna07 – Bhagavad Gita AI Bot',
          description:
            'Interactive chatbot where animated Krishna answers questions grounded in Bhagavad Gita context.',
          codeRepository: 'https://github.com/PIYUSH0-7',
        },
        {
          '@type': 'SoftwareSourceCode',
          position: 3,
          name: 'Saksham07 – Student Career Guidance AI',
          description:
            'AI-powered assistant providing career assessments, study roadmaps, and personalized recommendation systems.',
          codeRepository: 'https://github.com/PIYUSH0-7',
        },
        {
          '@type': 'SoftwareSourceCode',
          position: 4,
          name: 'FullStack MERN Web Apps',
          description:
            'End-to-end full-stack web applications built with MongoDB, Express.js, React.js, and Node.js.',
          codeRepository: 'https://github.com/PIYUSH0-7/2_FullStack_MERN',
        },
        {
          '@type': 'SoftwareSourceCode',
          position: 5,
          name: 'DSA with Python',
          description:
            'Algorithmic problem-solving challenges covering arrays, dynamic programming, recursion, hashing, and trees.',
          codeRepository: 'https://github.com/PIYUSH0-7/1_DSA_with_Python',
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <noscript>
          <header>
            <h1>Piyush Gangwar - Full Stack MERN &amp; AI Developer</h1>
            <p>
              B.Tech IT student at ABES Engineering College, Ghaziabad. Passionate software engineer specializing in MERN stack, Python Data Structures &amp; Algorithms, React Native mobile app development, and Agentic AI workflows.
            </p>
            <p>
              Location: Ghaziabad, Uttar Pradesh, India | Email: gangwarpiyush827@gmail.com | Phone: +91 8923845912
            </p>
            <p>
              GitHub: <a href="https://github.com/PIYUSH0-7">https://github.com/PIYUSH0-7</a> | LinkedIn: <a href="https://www.linkedin.com/in/piyush070/">https://www.linkedin.com/in/piyush070/</a>
            </p>
          </header>
          <section>
            <h2>Technical Skills</h2>
            <p>
              React.js, Node.js, Express.js, MongoDB, Python, DSA, TypeScript, React Native, Expo, Tailwind CSS, Docker, Git, GitHub, Postman, Firebase, Vercel, Railway, Agentic AI, REST APIs.
            </p>
          </section>
          <section>
            <h2>Featured Projects &amp; Creations</h2>
            <ul>
              <li><strong>Academia 077 (Smart Student Assistant App):</strong> AI-powered lecture-note generator and student attendance system.</li>
              <li><strong>Krishna07 – Bhagavad Gita AI bot:</strong> Interactive LLM chatbot providing guidance grounded in the Bhagavad Gita.</li>
              <li><strong>Saksham07 – Student Career Guidance AI:</strong> AI career assessment and personalized recommendations system.</li>
              <li><strong>FullStack MERN:</strong> End-to-end web applications built with React, Node, Express, MongoDB.</li>
              <li><strong>DSA with Python:</strong> Algorithmic problem-solving challenges and solutions.</li>
            </ul>
          </section>
        </noscript>
        {children}
      </body>
    </html>
  );
}
