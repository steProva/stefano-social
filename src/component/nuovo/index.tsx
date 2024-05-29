import React, { useState } from "react";
import { useContext, useEffect } from "react";
import { DataContext, IDataContext } from "../../context/DataContext";
import { Main, Post, Reactions } from "../../data/tipi/types";

export default function Nuovo(): JSX.Element {

    const {postsData, setPostsData} = useContext(DataContext) as IDataContext;

    const [titolo, setTitolo] = useState<string>('');
    const [testo, setTesto] = useState<string>('');
    const [tags, setTags] = useState<string[]>([]);

    function salvaNota() {

        const oggetto = {
            id: 0,
            title: titolo,
            body: testo,
            tags: [''], //placeholder
            reactions: { //placeholder
                likes: 0,
                dislikes: 0
            },
            views: 1,
            userId: 1 //placeholder
          }

          if (postsData?.push(oggetto)) setPostsData([...postsData]) // Check perché è Post o undefined

    }

    return (
        <div className="nuovoPost">
            <input 
                type="text" 
                className="titolo" 
                placeholder="Titolo post..."
                onChange={(e) => {setTitolo(e.target.value)}}
            />
            <textarea 
                className="editor" 
                id="editor" 
                placeholder="Contenuto del post..."
                onChange={(e) => {setTesto(e.target.value)}}
            />
            <input 
                type="text" 
                className="tags" 
                placeholder="Tags..."
            />
            <button id="salva" onClick={salvaNota}>Pubblica</button>
        </div>
    )
}
