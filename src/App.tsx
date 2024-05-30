import React, {useState, useEffect, useContext} from 'react';
import './App.css';
import Header from './component/header';
import { Main, Post, Reactions } from './data/tipi/types';
import { FETCH_ERROR } from './data/errori/errori';
import Body from './component/body';
import { DataContext, IDataContext } from './context/DataContext';
import Nuovo from './component/nuovo';

function App() {

  const [postsData, setPostsData] = useState<Post[] | undefined>();
  const data = {postsData, setPostsData}

  const urlAPI = 'https://dummyjson.com/posts';

  useEffect(() => {
    fetch(urlAPI)
    .catch(err => {
      setPostsData(FETCH_ERROR(err.message))
      throw new Error(err);  
    })
    .then(r => {if (r.ok) {return r.json()} else console.error('Errore nella richiesta')}) //nel dubbio me lo faccio loggare anche in console
    .then(json => setPostsData((json as Main).posts))
  }, []);

  return (
    <DataContext.Provider value={data}>
    <div className='p-5 dark:bg-slate-800 transition-all'>
      <Header />
      <div className="flex">
        <Body />
        <Nuovo />
      </div>
      </div>
    </DataContext.Provider>
  );
}

export default App;
