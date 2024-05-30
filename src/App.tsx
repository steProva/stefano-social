import React, {useState, useEffect } from 'react';

import './App.css';

import { Main, Post } from './data/tipi/types';
import { FETCH_ERROR } from './data/errori/errori';
import { DataContext } from './context/DataContext';

import Nuovo from './component/nuovo';
import Body from './component/body';
import Header from './component/header';

function App() {

  const [postsData, setPostsData] = useState<Post[] | undefined>();
  const data = {postsData, setPostsData}

  const urlAPI = 'https://dummyjson.com/posts';

  useEffect(() => {
    fetch(urlAPI)
    .catch(err => {
      setPostsData(FETCH_ERROR(err.message)) //se becca un errore costruisce un oggetto Post con content il contenuto dell'errore (es.: Network error bla bla)
      throw new Error(err);  //mi serve solo ad uscire dal .then
    })
    .then(r => {if (r.ok) {return r.json()} else console.error('Errore nella richiesta')}) //nel dubbio me lo faccio loggare anche in console
    .then(json => setPostsData((json as Main).posts))
  }, []);


  return (
    <DataContext.Provider value={data}>
    <div className='p-5 dark:bg-slate-800 transition-all'>
      <Header />
      <div className="flex justify-around">
        <Body />
        <Nuovo />
      </div>
      </div>
    </DataContext.Provider>
  );
}

export default App;
