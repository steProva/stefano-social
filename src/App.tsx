import React, {useState, useEffect, useContext} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/header';
import { Posts, Reactions } from './data/tipi/types';
import Body from './component/body';
import { DataContext, TDataContext } from './context/DataContext';

function App() {

  const [postsData, setPostsData] = useState<Posts[]>();

  const urlAPI = 'https://dummyjson.com/posts';
  useEffect(() => {
    fetch(urlAPI)
    .then(r => r.json())
    .then(json => setPostsData(json))
  }, []);

  const tipiProps: TDataContext = {postsData}

  console.log(postsData)


  return (
    <DataContext.Provider value={tipiProps}>
      <div className="App">
        <Header />
        <Body />
      </div>
    </DataContext.Provider>
  );
}

export default App;
