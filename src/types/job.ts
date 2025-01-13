// Define valid values for each filter type
export type Role = 'Frontend' | 'Backend' | 'Fullstack'
export type Level = 'Junior' | 'Midweight' | 'Senior'
export type Language = 'HTML' | 'CSS' | 'JavaScript' | 'Python' | 'Ruby'
export type Tool = 'React' | 'Sass' | 'Vue' | 'Django' | 'RoR'

export interface Job {
  id: number
  company: string
  logo: string
  new: boolean
  featured: boolean
  position: string
  role: Role
  level: Level
  postedAt: string
  contract: string
  location: string
languages: readonly Language[]
tools: readonly Tool[]
}

export type FilterType = 'role' | 'level' | 'language' | 'tool'

export type FilterValue = Role | Level | Language | Tool

export interface Filter {
  type: FilterType
  value: FilterValue
}

export interface JobCardProps {
  job: Job
  onFilterClick?: (filter: Filter) => void
}

export interface JobListProps {
  jobs: Job[]
  onFilterClick?: (filter: Filter) => void
}