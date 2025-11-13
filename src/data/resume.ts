import type { Resume } from '../types'
import { siteMeta } from './siteMeta'
import { experiences } from './experience'

export const resume: Resume = {
  personal: siteMeta,
  summary:
    'Senior Mobile Engineer with 8+ years experience in mobile development and 6+ years specializing in Flutter. Expert in clean architecture, state management (BLoC, GetX, Provider, Cubit), CI/CD, Firebase, REST/GraphQL, and payment integrations. Delivered 30+ apps across multiple domains.',
  experience: experiences,
  education: [
    {
      institution: 'Sinai University',
      degree: 'Bachelor of Science (BSc)',
      field: 'Information Technology and Computer Science',
      year: '2016',
    },
  ],
  skills: [
    {
      category: 'Mobile Development',
      items: [
        'Flutter (6+ years)',
        'iOS (Swift, SwiftUI)',
        'Android (Kotlin, Jetpack Compose)',
        'React Native',
      ],
    },
    {
      category: 'Architecture & Patterns',
      items: [
        'Clean Architecture',
        'Domain-Driven Design (DDD)',
        'SOLID Principles',
        'Design Patterns',
      ],
    },
    {
      category: 'State Management',
      items: ['BLoC', 'GetX', 'Provider', 'Cubit', 'Riverpod', 'Redux'],
    },
    {
      category: 'Backend & APIs',
      items: [
        'REST API',
        'GraphQL',
        'Firebase',
        'Supabase',
        'WebSocket',
        'gRPC',
      ],
    },
    {
      category: 'DevOps & Tools',
      items: [
        'CI/CD (GitHub Actions, Bitrise, Codemagic)',
        'Git & GitHub',
        'Docker',
        'Fastlane',
        'Testing (Unit, Widget, Integration)',
      ],
    },
    {
      category: 'Additional Skills',
      items: [
        'Payment Integrations',
        'Push Notifications',
        'Analytics',
        'Crash Reporting',
        'Performance Optimization',
        'Code Review & Mentoring',
      ],
    },
  ],
}
