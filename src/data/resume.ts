import type { Resume } from '../types'
import { siteMeta } from './siteMeta'
import { experiences } from './experience'

export const resume: Resume = {
  personal: siteMeta,
  summary:
    'Senior Mobile Engineer with 8+ years of experience delivering 30+ production-ready mobile applications across e-commerce, fintech, logistics, and enterprise sectors. Proven expertise in Flutter, iOS, and Android development with Clean Architecture, MVVM, and BLoC patterns. Strong track record of achieving 99.5% crash-free rates, reducing deployment time by 87%, and leading cross-functional teams of 8+ members to successful market launches.',
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
      items: ['Flutter', 'Dart', 'Swift / SwiftUI', 'Kotlin / Jetpack Compose'],
    },
    {
      category: 'Architecture & State Management',
      items: [
        'Clean Architecture',
        'MVVM / MVC',
        'Modular Monorepos',
        'Micro-frontend',
        'Domain-Driven Design (DDD)',
        'Design Patterns',
        'BLoC / Cubit',
        'GetX / Riverpod',
        'Provider',
      ],
    },
    {
      category: 'Cloud & Integration',
      items: [
        'Firebase / Supabase',
        'REST API / GraphQL',
        'Payment Integration',
        'Fastlane',
        'GitHub Actions',
        'Bitrise',
      ],
    },
    {
      category: 'Databases & Storage',
      items: ['Hive / NoSQL', 'Shared Preferences / Secure Storage'],
    },
    {
      category: 'Testing & CI/CD',
      items: ['Unit Testing', 'Widget Testing', 'Mockito', 'CI/CD Code Coverage Optimization'],
    },
    {
      category: 'AI Tools',
      items: ['Cursor', 'Claude Code', 'Antigravity'],
    },
  ],
}
