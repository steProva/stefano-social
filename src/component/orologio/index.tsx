import React, { useState } from "react";

export default function Orologio(): JSX.Element {

    const [oraAttuale, aggiornaOra] = useState<string>(new Date().toLocaleTimeString());

    setInterval(() => {
        aggiornaOra(new Date().toLocaleTimeString());
    }, 1000)

       return <span>{oraAttuale}</span>
}