import React from "react";
import { useContext, useEffect, useState } from "react";
import { DataContext, IDataContext } from "../../context/DataContext";
import { Post, Reactions } from "../../data/tipi/types";

export default function Body(): JSX.Element {

    const {postsData, setPostsData} = useContext(DataContext) as IDataContext;

    return (
        <div id="bodyPosts">
            <ul id="posts">
                {postsData && postsData.map((i: Post) => (
                    <div className="post" id={i.id.toString()}>
                        <p className="title">User: {i.userId}, Post: {i.id}</p>
                        <p>{i.title}</p>
                        <p className="content">{i.body}</p>
                        <p className="views">Visualizzazioni: {i.views} - Likes: {i.reactions.likes} - Dislikes: {i.reactions.dislikes}</p>
                    </div>
                ))}
            </ul>

        </div>
    )

}