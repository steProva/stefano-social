import React, {useState, useEffect, useContext} from 'react';
import './App.css';
import Header from './component/header';
import { Main, Post, Reactions } from './data/tipi/types';
import Body from './component/body';
import { DataContext, IDataContext } from './context/DataContext';
import Nuovo from './component/nuovo';

function App() {

  const [postsData, setPostsData] = useState<Post[] | undefined>();
  const data = {postsData, setPostsData}

  const urlAPI = 'https://dummyjson.com/posts';

/*  function setData(args: Main) {
    args? setPostsData(args.posts) : console.log('Errore nel fetching');
  } */

  useEffect(() => {
    // try {
    fetch(urlAPI)
    .then(r => r.json())
    .then(json => setPostsData((json as Main).posts))
    // } catch (error) {
    //   console.log(error)
    // } finally {
    //   console.log('Tentativo di fetching fatto')
    // }
  }, []);

  return (
    <DataContext.Provider value={data}>
      <Header />
      <div className="App">
        <Body />
        <Nuovo />
      </div>
    </DataContext.Provider>
  );
}

export default App;
