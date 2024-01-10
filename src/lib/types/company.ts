export type Company = {
  slug: string
  name: string
  images: { url: string }[]
  bg?: `bg-${string}`
  start: Date
  end?: Date
  description: string
  job?: string
}
