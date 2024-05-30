import React from "react";
import { useContext } from "react";
import { DataContext, IDataContext } from "../../context/DataContext";
import { Post, Reactions } from "../../data/tipi/types";

export default function Header(): JSX.Element {

    

    return (
        <div className="bg-purple-700 text-white text-lg p-5 text-center rounded-md shadow-xl">
            Stefano Scauzillo Social
        </div>
    )
}