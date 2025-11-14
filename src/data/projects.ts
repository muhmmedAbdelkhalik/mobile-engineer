import type { Project } from '../types'

export const projects: Project[] = [
  {
    "id": "tactical-mobile",
    "title": "Tactical Mobile",
    "description": "Sports prediction app with real-time chat, leaderboards, and social features",
    "longDescription": "Comprehensive sports application featuring match predictions, real-time leaderboards, and community chat functionality. Built with Clean Architecture and GetX for scalable state management. Implemented real-time features using Firebase Firestore, automatic token refresh mechanism, and multi-environment support. Integrated Firebase services including FCM, Remote Config, Analytics, and Cloud Storage. Features include presence tracking, deep linking, multi-language support (English/Arabic), and robust error handling with Sentry.",
    "tech": [
      "Flutter",
      "Dart",
      "GetX",
      "Clean Architecture",
      "Dio",
      "Firebase Firestore",
      "Firebase Cloud Messaging",
      "Firebase Remote Config",
      "Firebase Analytics",
      "Firebase Cloud Storage",
      "Sentry",
      "Shared Preferences",
      "SignalR",
      "Deep Linking",
      "Multi-language (i18n)",
      "Real-time Messaging",
      "Multi-environment",
      "Interceptors"
    ],
    "image": "/projects/tactical-mobile.png",
    "links": {
      appStore: 'https://apps.apple.com/eg/app/tactical-%D8%AA%D9%83%D8%AA%D9%8A%D9%83%D9%8A/id6739902280',
      playStore: 'https://play.google.com/store/apps/details?id=com.awoon.tactical',
    },
    "featured": true
  },
  {
    id: 'erwaa',
    title: 'Erwaa | إرواء',
    description: 'Enterprise app with clean architecture, BLoC, and comprehensive testing',
    longDescription:
      'Led the Erwaa project for 2 years at Squadio, enhancing its market fit and performance. Developed from initial development phase to production. Implemented multiple features including FCM, Crashlytics, Dynamic Link, and Remote Config. Enhanced clean architecture using BLoC state management. Added unit testing and integration tests, refactored code to SDLC principles, and implemented multiple flavors.',
    tech: [
      'Flutter',
      'BLoC',
      'Clean Architecture',
      'Unit Testing',
      'Integration Testing',
      'FCM',
      'Crashlytics',
      'Dynamic Links',
      'Remote Config',
      'Multiple Flavors',
      'SDLC',
    ],
    image: '/projects/erwaa.png',
    links: {
      appStore: 'https://apps.apple.com/eg/app/erwaa-%D8%A5%D8%B1%D9%88%D8%A7%D8%A1/id1390956979',
      playStore: 'https://play.google.com/store/apps/details?id=com.erwaa.android',
    },
    featured: true,
  },
  {
    id: 'maraya',
    title: 'Maraya - مرايا',
    description: 'Arab fashion marketplace - preparing the app for market launch on iOS & Android',
    longDescription:
      'Led the Maraya project at Cander, resolving technical challenges and preparing the app for market launch on iOS and Android platforms. Redesigned and implemented a new UI version to enhance user experience. The app is a comprehensive fashion marketplace targeting the Arab market.',
    tech: [
      'Flutter',
      'Clean Architecture',
      'iOS',
      'Android',
      'UI/UX Implementation',
      'Market Launch',
    ],
    image: '/projects/maraya.png',
    links: {
      appStore:
        'https://apps.apple.com/ae/app/maraya-%D9%85%D8%B1%D8%A7%D9%8A%D8%A7/id6511243162',
      playStore: 'https://play.google.com/store/apps/details?id=com.maraya.sa&hl=en',
    },
    featured: false,
  },
  {
    id: 'urnt',
    title: 'URNT',
    description: 'Full-cycle development from concept to production',
    longDescription:
      'Successfully launched the URNT project from concept to production at Ewa company. Collaborated closely with project managers and stakeholders to align development with business goals. Streamlined coordination between backend and UI teams for seamless development. Improved project maintainability by implementing clean architecture and SDLC principles.',
    tech: [
      'Flutter',
      'Clean Architecture',
      'SDLC Principles',
      'FCM',
      'Crashlytics',
      'Full-Stack Development',
    ],
    image: '/projects/urnt.png',
    links: {
      appStore: 'https://apps.apple.com/sa/app/urnt-%D9%8A%D9%88%D8%B1%D9%8A%D9%86%D8%AA/id6474184986?l=ar',
    },
    featured: false,
  },
  {
    id: 'dshopper',
    title: 'Dshopper',
    description: 'Full-cycle development from concept to production for Wothoq',
    longDescription:
      'Developed Dshopper from the ground up for Wothoq company. Handled complete development lifecycle from initial concept through to production deployment on both iOS and Android platforms.',
    tech: ['Flutter', 'Full-Stack Development', 'iOS', 'Android'],
    image: '/projects/dshopper.png',
    links: {
      appStore: 'https://apps.apple.com/sa/app/d-shopper/id6670364999?l=ar',
      playStore:
        'https://play.google.com/store/apps/details?id=com.dshopper.app',
    },
    featured: false,
  },

  {
    id: 'cave',
    title: 'Cave',
    description: 'Food delivery app built with Stacked architecture',
    longDescription:
      'Developed Cave, a food delivery application for Remood Inc., from initial development phase to production. Implemented FCM and Crashlytics. Built using Stacked architecture pattern with state management.',
    tech: [
      'Flutter',
      'Stacked Architecture',
      'Provider',
      'FCM',
      'Crashlytics',
      'Food Delivery',
    ],
    image: '/projects/cave.png',
    links: {
      appStore: 'https://apps.apple.com/eg/app/cave-eat-play/id1553688456',
    },
    featured: false,
  },
  {
    id: 'mahshihub',
    title: 'Mahshihub',
    description: 'E-commerce app with Stacked architecture',
    longDescription:
      'Developed Mahshihub for Remood Inc. from initial development phase to production. Implemented multiple features including FCM and Crashlytics. Created using Stacked architecture pattern.',
    tech: ['Flutter', 'Stacked Architecture', 'Provider', 'FCM', 'Crashlytics'],
    image: '/projects/mahshihub.png',
    links: {
      appStore: 'https://apps.apple.com/eg/app/mahshihub/id1625504918',
    },
    featured: false,
  },
  {
    id: 'jawhara',
    title: 'Jawhara',
    description: 'E-commerce app with QR code scanning and MVVM architecture',
    longDescription:
      'Developed Jawhara for Internet Solutions from initial development phase to production. Implemented FCM, Crashlytics, and Dynamic Links. Created MVVM architecture using REST API with Provider state management and dependency injection using get_it. Implemented QR code scanning functionality. Deployed to App Store, Play Store, and AppGallery.',
    tech: [
      'Flutter',
      'MVVM',
      'Provider',
      'Get_it',
      'QR Code',
      'REST API',
      'FCM',
      'Crashlytics',
      'Dynamic Links',
    ],
    image: '/projects/jawhara.png',
    links: {
      appStore: 'https://apps.apple.com/eg/app/%D8%AC%D9%88%D9%87%D8%B1%D9%87-%D8%AA%D8%B3%D9%88%D9%82-%D8%A3%D9%88%D9%86%D9%84%D8%A7%D9%8A%D9%86/id1565162947',
      playStore:
        'https://play.google.com/store/apps/details?id=online.jawhara',
    },
    featured: false,
  },
  {
    id: 'radwa-express',
    title: 'Radwa Express',
    description: 'E-commerce app with WordPress API integration and native payment SDK',
    longDescription:
      'Developed for Internet Solutions with complete e-commerce functionality. Implemented shopping cart connected to WordPress API, homepage and product details integration. Developed Android SDK for native payment gateway integration. Updated iOS project to stable version.',
    tech: [
      'Flutter',
      'WordPress API',
      'Android SDK',
      'Kotlin',
      'Swift',
      'Payment Gateway',
      'E-commerce',
    ],
    image: '/projects/radwa-express.png',
    links: {
      appStore: 'https://apps.apple.com/eg/app/radwa-express-%D8%B1%D8%B6%D9%88%D9%89-%D8%A5%D9%83%D8%B3%D8%A8%D8%B1%D9%8A%D8%B3/id1536911687',
      playStore:
        'https://play.google.com/store/apps/details?id=sa.net.is.radwa',
    },
    featured: false,
  },
  {
    id: 'johrh',
    title: 'JOHRH.com',
    description: 'E-commerce platform with WordPress integration (Freelance)',
    longDescription:
      'Freelance project developing UI frontend for homepage and product details screens. Implemented shopping cart and WordPress API integration for product catalog and details. Updated iOS project to stable version and deployed to stores.',
    tech: [
      'Flutter',
      'WordPress API',
      'E-commerce',
      'UI Development',
      'REST API',
    ],
    image: '/projects/johrh.png',
    links: {
      appStore: 'https://apps.apple.com/eg/app/%D8%B9%D8%A8%D8%A7%D9%8A%D8%A7%D8%AA-%D8%AC%D9%88%D9%87%D8%B1%D8%A9/id1481960464',
    },
    featured: false,
  },
]
