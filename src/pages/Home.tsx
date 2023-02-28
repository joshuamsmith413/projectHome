import React, { useState, useEffect  } from "react";

export default function Home() {
    const foo: string = "Welcome to React App thats build using Webpack and Babel separately";
    const [res, setRes] = useState('');


  

    return (
        <div>
            Welcome to React App thats build using Webpack
            {res}
        </div>
    )
}