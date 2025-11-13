import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'maraya',
    title: 'Maraya - مرايا',
    description: 'Arab fashion marketplace with iOS & Android launch',
    longDescription:
      'Maraya is a comprehensive fashion marketplace app targeting the Arab market. Built with Flutter, it features a complete e-commerce experience with product browsing, shopping cart, secure payments, and order tracking. The app supports both Arabic and English languages with RTL support for Arabic content.',
    tech: [
      'Flutter',
      'Clean Architecture',
      'BLoC',
      'Firebase',
      'REST API',
      'Payment Integration',
      'Push Notifications',
      'i18n',
    ],
    image: '/projects/maraya.png',
    links: {
      appStore: 'https://apps.apple.com/us/app/maraya-%D9%85%D8%B1%D8%A7%D9%8A%D8%A7/id6511243162',
    },
    featured: true,
  },
  {
    id: 'erwaa-urnt',
    title: 'Erwaa (URNT & Smart Pass)',
    description: 'Product refinement and production launch',
    longDescription:
      'Led the Flutter development for Erwaa project, which includes URNT (a comprehensive logistics and delivery platform) and Smart Pass (an access control and management system). Coordinated with product managers, backend teams, and UI designers to refine requirements and successfully launch both products to production.',
    tech: [
      'Flutter',
      'GetX',
      'Clean Architecture',
      'GraphQL',
      'Firebase',
      'CI/CD',
      'Unit Testing',
      'Integration Testing',
    ],
    image: '/projects/erwaa.png',
    links: {},
    featured: true,
  },
  {
    id: 'fb-chain',
    title: 'FB-Chain & Multiple Projects',
    description: 'Contributions across 30+ apps in multiple domains',
    longDescription:
      'Throughout my career, I have contributed to over 30 mobile applications across various domains including e-commerce, fintech, healthcare, logistics, and social platforms. These projects involved implementing features, fixing bugs, improving performance, setting up CI/CD pipelines, and mentoring junior developers.',
    tech: [
      'Flutter',
      'iOS (Swift/SwiftUI)',
      'Android (Kotlin/Compose)',
      'React Native',
      'Firebase',
      'Supabase',
      'CI/CD',
      'DDD',
      'Testing',
    ],
    image: '/projects/portfolio.png',
    links: {},
    featured: false,
  },
]
