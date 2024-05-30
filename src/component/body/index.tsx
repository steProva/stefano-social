import React from "react";
import { useContext, useEffect, useState } from "react";
import { DataContext, IDataContext } from "../../context/DataContext";
import { Post, Reactions } from "../../data/tipi/types";

export default function Body(): JSX.Element {

    const {postsData, setPostsData} = useContext(DataContext) as IDataContext;

    function like() {

    }

    return (
        <div id="bodyPosts">
            <div id="posts" className="flex flex-wrap">
                {postsData && postsData.map((i: Post) => (
                    <div className="w-96 h-96 m-2 p-3 shadow-xl bg-cyan-300 flex flex-col flex-grow rounded-md" id={i.id.toString()} key={i.id}>

                        <p className="self-center">&#x1F466; {i.userId}</p>
                        <p className="self-center">{i.title}</p>

                        <div className="overflow-y-scroll">
                            <p className="break-words">{i.body}</p>
                        </div>

                        <div className="text-center justify-self-end">Tags: {i.tags.map((tag) => (
                            <a className="mx-1" rel="noreferrer noopener" target="_blank" href={"https://en.wikipedia.org/wiki/"+tag}>
                                <span className="tag bg-slate-300 rounded-lg text-white p-0.5"> {tag} </span>
                            </a>
                    )
                        )}</div>

                        <span className="self-center">&#x1F440; {i.views} - &#x1F493; {i.reactions.likes} - &#x1F494; {i.reactions.dislikes}</span>
                    </div>
                ))}
            </div>
        </div>
    )

}