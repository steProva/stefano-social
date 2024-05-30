import React, { useState } from "react";
import { useContext, useEffect } from "react";
import { DataContext, IDataContext } from "../../context/DataContext";
import { Main, Post, Reactions } from "../../data/tipi/types";

export default function Nuovo(): JSX.Element {

    const {postsData, setPostsData} = useContext(DataContext) as IDataContext;

    const [titolo, setTitolo] = useState<string>('');
    const [testo, setTesto] = useState<string>('');
    const [user, setUser] = useState<string>('');
    const [logState, changeLogState] = useState<boolean>(false);
    const [tags, setTags] = useState<string[]>([]);
    // const [show, setShow] = useState<boolean>(false) Serviva a 

    let error: string | undefined;

    function salvaNota() {

        const oggetto = {
            id: 0,
            title: titolo,
            body: testo,
            tags: tags, //placeholder
            reactions: { //placeholder
                likes: 0,
                dislikes: 0
            },
            views: 1,
            userId: user
          }

          if (postsData?.unshift(oggetto)) setPostsData([...postsData]) // Check perché è Post o undefined

    }

    return (
        <div className="rounded-md w-11/12 min-h-full bg-purple-700 flex flex-col my-2 p-2 py-5 text-white">

           {logState && <span className="p-5">Login effettuato come: {user}<button onClick={() => changeLogState(!logState)} className="btn-nuovo">Cambia utente</button></span>}

           {logState || <div id="showUser" className="rounded-md p-5">
                <input 
                    className="rounded-md text-black px-2"
                    type="text"
                    id="userId"
                    placeholder="Scegli lo username..."
                    onChange={(e) => setUser(e.target.value)}
                 />
                 <button id="login" className="btn-nuovo" onClick={() => changeLogState(!logState)}>Sign in</button>
            </div> }
            {/* <button id="showButton" onClick={() => setShow(!show)}>Nuovo post</button> */} 
            {logState && user !== "" && <div id="showInput" className="p-5 m-7">
                <input 
                    type="text" 
                    className="text-black rounded-md" 
                    placeholder="Titolo post..."
                    onChange={(e) => {setTitolo(e.target.value)}}
                />
                <textarea 
                    className="text-black min-h-10 rounded-md" 
                    id="editor" 
                    placeholder="Contenuto del post..."
                    onChange={(e) => {setTesto(e.target.value)}}
                />
                <input 
                    type="text" 
                    className="text-black rounded-md" 
                    placeholder="Tags..."
                    onChange={(e) => {setTags((e.target.value).split(" "))}}
                />
                <button id="salva" className="btn-nuovo" onClick={salvaNota}>Pubblica</button>
            </div>}
        </div>
    )
}
