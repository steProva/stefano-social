import React from "react";
import Orologio from "../orologio";
import DarkMode from "../darkToggle";

export default function Header(): JSX.Element {

    return (
        <div className="bg-purple-700 dark:bg-slate-600 transition-all text-white text-lg p-5 text-center rounded-md shadow-xl flex justify-evenly">
            <p>Stefano Scauzillo Social</p>
            <Orologio />
            <DarkMode />
        </div>
    )

}