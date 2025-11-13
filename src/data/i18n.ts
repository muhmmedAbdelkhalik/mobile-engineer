// Internationalization stub for future Arabic/English translations
// TODO: Implement full i18n support with react-i18next or similar

export interface Translations {
  nav: {
    home: string
    projects: string
    experience: string
    cv: string
    contact: string
  }
  home: {
    greeting: string
    cta: {
      viewProjects: string
      viewCV: string
    }
  }
  projects: {
    title: string
    viewDetails: string
    liveDemo: string
    sourceCode: string
  }
  experience: {
    title: string
    present: string
  }
  cv: {
    title: string
    download: string
    summary: string
    experience: string
    education: string
    skills: string
  }
  contact: {
    title: string
    name: string
    email: string
    message: string
    send: string
    success: string
    error: string
  }
}

export const translations: Record<'en' | 'ar', Translations> = {
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      experience: 'Experience',
      cv: 'CV',
      contact: 'Contact',
    },
    home: {
      greeting: 'Hi, I\'m',
      cta: {
        viewProjects: 'View Projects',
        viewCV: 'View CV',
      },
    },
    projects: {
      title: 'Projects',
      viewDetails: 'View Details',
      liveDemo: 'Live Demo',
      sourceCode: 'Source Code',
    },
    experience: {
      title: 'Experience',
      present: 'Present',
    },
    cv: {
      title: 'Curriculum Vitae',
      download: 'Download PDF',
      summary: 'Summary',
      experience: 'Experience',
      education: 'Education',
      skills: 'Skills',
    },
    contact: {
      title: 'Contact Me',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      success: 'Message sent successfully!',
      error: 'Failed to send message. Please try again.',
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      projects: 'المشاريع',
      experience: 'الخبرة',
      cv: 'السيرة الذاتية',
      contact: 'تواصل',
    },
    home: {
      greeting: 'مرحباً، أنا',
      cta: {
        viewProjects: 'عرض المشاريع',
        viewCV: 'عرض السيرة الذاتية',
      },
    },
    projects: {
      title: 'المشاريع',
      viewDetails: 'عرض التفاصيل',
      liveDemo: 'عرض مباشر',
      sourceCode: 'الكود المصدري',
    },
    experience: {
      title: 'الخبرة العملية',
      present: 'حالياً',
    },
    cv: {
      title: 'السيرة الذاتية',
      download: 'تحميل PDF',
      summary: 'نبذة',
      experience: 'الخبرة',
      education: 'التعليم',
      skills: 'المهارات',
    },
    contact: {
      title: 'تواصل معي',
      name: 'الاسم',
      email: 'البريد الإلكتروني',
      message: 'الرسالة',
      send: 'إرسال الرسالة',
      success: 'تم إرسال الرسالة بنجاح!',
      error: 'فشل إرسال الرسالة. يرجى المحاولة مرة أخرى.',
    },
  },
}

// Current language (default: English)
export const currentLang: 'en' | 'ar' = 'en'

// Helper function to get translation
export const t = (key: string): string => {
  const keys = key.split('.')
  let value: unknown = translations[currentLang]

  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = (value as Record<string, unknown>)[k]
    } else {
      return key
    }
  }

  return typeof value === 'string' ? value : key
}
