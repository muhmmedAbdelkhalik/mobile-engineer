export interface SiteMeta {
  name: string
  title: string
  location: string
  email: string
  phone: string
  github: string
  linkedin: string
  bio: string
}

export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  tech: string[]
  image: string
  links: {
    github?: string
    live?: string
    appStore?: string
    playStore?: string
  }
  featured: boolean
}

export interface Experience {
  id: string
  company: string
  position: string
  period: string
  startDate: string
  endDate: string
  description: string[]
  tech?: string[]
}

export interface Education {
  institution: string
  degree: string
  field: string
  year: string
}

export interface Resume {
  personal: SiteMeta
  summary: string
  experience: Experience[]
  education: Education[]
  skills: {
    category: string
    items: string[]
  }[]
}
