import { Brands } from '$lib/assets/brands'
import type { Skill } from '$lib/types/skill'

export const skills = [
  {
    name: 'Node.js',
    icon: Brands.Node,
    category: 'Back-End',
    preferred: true,
  },
  {
    name: 'Next.js',
    icon: Brands.Next,
    category: 'Front-End',
    preferred: false,
  },
  {
    name: 'TypeScript',
    icon: Brands.Typescript,
    category: 'Front-End',
    preferred: true,
  },
  {
    name: 'Tailwind CSS',
    icon: Brands.Tailwind,
    category: 'Front-End',
    preferred: false,
  },
  {
    name: 'PostgreSQL',
    icon: Brands.Postgres,
    category: 'Other',
    preferred: true,
  },
  {
    name: 'Docker',
    icon: Brands.Docker,
    category: 'Ops',
    preferred: false,
  },
  {
    name: 'Svelte',
    icon: Brands.Svelte,
    category: 'Front-End',
    preferred: true,
  },
  {
    name: 'Git, GitHub & GitLab',
    icon: Brands.Github,
    category: 'Other',
    preferred: false,
  },
  {
    name: 'MongoDB',
    icon: Brands.Mongo,
    category: 'Other',
    preferred: false,
  },
  {
    name: 'Kubernetes',
    icon: Brands.K8S,
    category: 'Other',
    preferred: false,
  },
  {
    name: 'Adonis.js',
    icon: Brands.Adonis,
    category: 'Back-End',
    preferred: true,
  },
  {
    name: 'Angular',
    icon: Brands.Angular,
    category: 'Front-End',
    preferred: false,
  },
] satisfies Skill[]
