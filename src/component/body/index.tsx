import React from "react";
import { useContext } from "react";
import { DataContext, IDataContext } from "../../context/DataContext";
import { Post } from "../../data/tipi/types";

export default function Body(): JSX.Element {

    const {postsData, setPostsData} = useContext(DataContext) as IDataContext;

    return (

        <div id="bodyPosts flex-1">
            <div id="posts" className="flex flex-wrap p-7">
                {postsData && postsData.map((i: Post) => (
                    <div className="w-96 h-96 m-2 p-3 shadow-xl bg-purple-300 dark:bg-purple-800 dark:text-white transition-all flex flex-col flex-grow rounded-md" id={i.id.toString()} key={i.id}>

                        <p className="self-center">&#x1F466; {i.userId}</p>
                        <p className="self-center my-5 bg-purple-700 rounded-lg text-white w-96 text-center dark:bg-slate-200 dark:text-black">{i.title}</p>

                        <div className="overflow-y-scroll">
                            <p className="break-words mx-4">{i.body}</p>
                        </div>

                        <div className="text-center justify-self-end my-5">Tags: {i.tags.map((tag) => (
                            <a className="mx-1" rel="noreferrer noopener" target="_blank" href={"https://en.wikipedia.org/wiki/"+tag}> {/*se in tag ci sono caratteri non supportati dall'url
                            reindirizza alla pagina di errore di wikipedia*/}
                                <span className="tag bg-purple-700 rounded-lg text-white w-96 text-center dark:bg-slate-200 dark:text-black transition-all p-0.5"> {tag} </span>
                            </a>
                                )
                                    )}
                            <div className="self-center">
                                &#x1F440; {i.views} - <span>&#x1F493; {i.reactions.likes}</span> - &#x1F494; {i.reactions.dislikes}
                            </div>
                        
                        </div>

                        
                    </div>
                ))}
            </div>
        </div>

    )

}