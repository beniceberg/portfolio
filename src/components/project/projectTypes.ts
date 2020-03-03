export type ProjectType = {
  node: {
    _id: string
    company: string
    link?: string
    dateInterval: {
      start_date: string
      end_date: string
    }
    location: string
    role: string
    slug: {
      current: string
    }
    tasks: TaksType[]
  }
}

type TaksType = {
  description: string
  tags: TagType[]
}

export type TagType = {
  title: string
  slug: {
    current: string
  }
}
