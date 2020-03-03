export type PostType = {
  node: {
    id: string
    title: string
    excerpt: string
    slug: {
      current: string
    }
    publishedAt: string
    language: {
      key: string
    }
  }
}
