type Category = 'Front-End' | 'Back-End' | 'Ops' | 'Other'

export type Skill = {
  name: string
  icon: string
  category: Category
  preferred: boolean
}
