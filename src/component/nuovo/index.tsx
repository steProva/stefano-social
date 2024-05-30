import React, { useState } from "react";
import { useContext } from "react";
import { DataContext, IDataContext } from "../../context/DataContext";

export default function Nuovo(): JSX.Element {

    const {postsData, setPostsData} = useContext(DataContext) as IDataContext;

    const [titolo, setTitolo] = useState<string>('');
    const [testo, setTesto] = useState<string>('');
    const [user, setUser] = useState<string>('');
    const [logState, changeLogState] = useState<boolean>(false);
    const [tags, setTags] = useState<string[]>([]);

    function salvaNota() {

        const oggetto = {
            id: 0, //placeholder, è inutile per ora
            title: titolo,
            body: testo,
            tags: tags,
            reactions: { 
                likes: 0, //placeholder
                dislikes: 0 //placeholder
            },
            views: 1, //placeholder
            userId: user
          }

          if (postsData?.unshift(oggetto)) setPostsData([...postsData]) // Check perché è Post o undefined

    }

    return (
        <div id="nuovo" className="sticky top-36 dark:bg-slate-600 transition-all rounded-md h-full bg-purple-700 flex flex-col my-2 p-2 py-5 text-white flex-none">

           {logState && <span className="p-5 self-center"> {/* se sono loggato posso cambiare utente*/}
            <p className="bg-purple-300 rounded-lg text-black w-48 text-center dark:bg-slate-200 dark:text-black">{user}</p><br></br>
            <button onClick={() => changeLogState(!logState)} className="btn-nuovo ml-5">Cambia utente</button></span>
            }

           {logState || <div id="showUser" className="rounded-md p-5"> {/*mostra solo se non loggato*/}
                <input 
                    className="rounded-md text-black px-2 my-4"
                    type="text"
                    id="userId"
                    placeholder="Scegli lo username..."
                    onChange={(e) => setUser(e.target.value)}
                 />
                 <button id="login" className="btn-nuovo" onClick={() => changeLogState(!logState)}>Sign in</button>
            </div> }
            {logState && user !== "" && <div id="showInput" className="p-5 m-7 flex flex-col"> {/*c'è bisogno di scrivere il nome utente la prima volta che viene caricata la pagina, user diverso da default*/}
                <input //altrimenti carica l'ultimo utente scritto
                    type="text" 
                    className="text-black rounded-md my-3" 
                    placeholder="Titolo post..."
                    onChange={(e) => {setTitolo(e.target.value)}}
                />
                <textarea 
                    className="text-black min-h-10 rounded-md my-3" 
                    id="editor" 
                    placeholder="Contenuto del post..."
                    onChange={(e) => {setTesto(e.target.value)}}
                />
                <input 
                    type="text" 
                    className="text-black rounded-md my-3" 
                    placeholder="Tags..."
                    onChange={(e) => {setTags((e.target.value).split(" "))}} //i tag li separa con lo spazio
                />
                <button className="btn-nuovo" onClick={salvaNota}>Pubblica</button>
            </div>}
        </div>
    )
}
