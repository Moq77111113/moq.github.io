import { Companies } from '$lib/assets/companies'
import type { Company } from '$lib/types/company'

export const companies = [
  {
    slug: 'bellman',
    name: 'Bellman',
    images: [{ url: Companies.Bellman }],
    bg: 'bg-white',
    start: new Date('2023-07-10'),
    description:
      'Bellman is a real estate management software that automates administrative, accounting, and legal tasks, freeing up time for property management teams',
    job: 'FullStack Developer',
  },
  {
    slug: 'yamay',
    name: 'Yamay',
    images: [{ url: Companies.Yamay }],
    bg: 'bg-white',
    start: new Date('2022-01-01'),
    end: new Date('2023-06-30'),
    description:
      'Yamay is a digital menu platform offering customization, order management, and customer engagement tools for restaurants and cafes.',
    job: 'FullStack Developer',
  },
  {
    slug: 'hvs',
    name: 'Hôpital du Valais',
    images: [{ url: Companies.HVS }],
    bg: 'bg-white',
    start: new Date('2017-10-22'),
    end: new Date('2021-12-31'),
    description:
      'Hôpital du Valais is a public hospital in the canton of Valais, Switzerland.',
    job: 'FullStack Developer',
  },
  {
    slug: 'jdc',
    name: 'JDC SA',
    images: [{ url: Companies.JDC }],
    bg: 'bg-white',
    start: new Date('2016-01-15'),
    end: new Date('2017-10-22'),
    description:
      'JDC is a French company specializing in retail POS equipment solutions',
    job: 'IT Technician',
  },
  {
    slug: 'se',
    name: 'Schneider Electric',
    images: [{ url: Companies.SE }],
    bg: 'bg-white',
    start: new Date('2014-09-01'),
    end: new Date('2015-10-10'),
    description:
      'Schneider Electric is a French multinational corporation specializing in electrical equipment.',
    job: 'IT Work-Study',
  },
  {
    slug: 'euromonetic',
    name: 'Euromonetic',
    images: [{ url: Companies.Euromonetic }],
    bg: 'bg-white',
    start: new Date('2013-09-01'),
    end: new Date('2014-09-01'),
    description:
      'Euromonetic is a French company specializing in retail POS equipment solutions',
    job: 'IT Work-Study',
  },
] satisfies Company[]
