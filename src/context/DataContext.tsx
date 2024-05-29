import {createContext} from 'react';
import { Posts } from "../data/tipi/types"

export type TDataContext = {
    postsData: Posts[] | undefined
}

export const DataContext = createContext<TDataContext | null>(null)