import React from "react";
import { useEffect, useContext, useState } from "react";
import { DataContext, TDataContext } from "../../context/DataContext";

export default function Body(): JSX.Element {

    const {postsData} = useContext(DataContext) as TDataContext;

    return (
        <div id="bodyPosts">
            <p></p>
        </div>
    )

}