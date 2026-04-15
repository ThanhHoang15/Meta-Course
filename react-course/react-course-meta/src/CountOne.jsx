import { useState } from "react"

export default function CountOne () {
    const [num, setNum] = useState(0)

    return(
        <>
         <h1>{num}</h1>
         <button onClick={() => setNum(num+1)}>click me to add 1</button>
         <button onClick={() => setNum(0)}>reset me to 0</button>
         <button onClick={() => setNum(num-1)}>click me to subtract 1</button>

    
        </>
    )
}