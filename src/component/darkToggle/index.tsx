import React from "react";

export default function DarkMode(): JSX.Element {
    return (
        <button onClick={() => {
            let root = document.getElementById('root');
            root!.classList.toggle('dark')
          }}><img className="h-7 w-7 dark:invert" src="/dark.png"></img>
          </button>
    )
}