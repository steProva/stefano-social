import React, {useState, useEffect, useContext} from 'react';
import './App.css';
import Header from './component/header';
import { Main, Post, Reactions } from './data/tipi/types';
import Body from './component/body';
import { DataContext, IDataContext } from './context/DataContext';

function App() {

  const [postsData, setPostsData] = useState<Main>();
  const data = {postsData}

  const urlAPI = 'https://dummyjson.com/posts';

  useEffect(() => {
    fetch(urlAPI)
    .then(r => r.json())
    .then(json => setPostsData(json))
  }, []);

  return (
    <DataContext.Provider value={data}>
      <div className="App">
        <Header />
        <Body />
      </div>
    </DataContext.Provider>
  );
}

export default App;
