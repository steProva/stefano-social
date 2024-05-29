export type Posts = {
    id: number
    title: string
    body: string
    tags: string[]
    reactions: Reactions
    views: number
    userId: number
  }
  
  export type Reactions = {
    likes: number
    dislikes: number
  }
  