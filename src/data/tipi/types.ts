export interface Main {
    posts: Post[]
    total: number
    skip: number
    limit: number
  }
  
  export interface Post {
    id: number 
    title: string
    body: string
    tags: string[]
    reactions: Reactions
    views: number
    userId: number | string
  }
  
  export interface Reactions {
    likes: number
    dislikes: number
  }