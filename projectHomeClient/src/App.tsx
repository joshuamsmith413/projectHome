import React, { useState, useEffect  } from "react";

const App = () => {
    const foo: string = "Welcome to React App thats build using Webpack and Babel separately";
    const [res, setRes] = useState();


    useEffect(() => {
        const fetchBE = async () => {
            const repsonse = await fetch('http://localhost:5000/express_backend')
            const body = await repsonse.json()
            setRes(body)
        }
        fetchBE()
        console.log(res)
    }, [])

    return (
        <div>
            Welcome to React App thats build using Webpack and Babel separately
        </div>
    )
}

export default App