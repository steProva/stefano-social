import React from "react";
import Orologio from "../orologio";
import DarkMode from "../darkToggle";

export default function Header(): JSX.Element {

    return (
        <>
        <div className="sticky top-10 z-50 shadow-xl bg-purple-700 dark:bg-slate-600 transition-all text-white text-lg p-5 text-center rounded-md flex justify-evenly">
            <p>Stefano Scauzillo Social</p>
            <Orologio />
            <DarkMode />
        </div>
        <div className="sticky bg-white dark:bg-slate-800 h-32 top-0">
        </div>
        </>
    )

}