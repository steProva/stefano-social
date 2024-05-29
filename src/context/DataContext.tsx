import {createContext} from 'react';
import { Main, Post } from "../data/tipi/types"

export type IDataContext = {
    postsData: Main | undefined
}

export const DataContext = createContext<IDataContext | undefined>(undefined)