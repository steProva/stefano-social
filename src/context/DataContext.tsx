import {createContext} from 'react';
import { Post } from "../data/tipi/types"

export type IDataContext = {
    postsData: Post[] | undefined
    setPostsData: (args: Post[]) => void | undefined
}

export const DataContext = createContext<IDataContext | undefined>(undefined)