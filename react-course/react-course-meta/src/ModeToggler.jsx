import {useState} from "react"

function ModeToggler (){
    const [darkModeOn, setDarkModeOn] = useState(true)
    const printDarkMode = <h1>Dark Mode is On</h1>
    const printLightMode = <h1>Light Mode is On</h1>


    return(
        <div>
            {darkModeOn ? printDarkMode : printLightMode }
            <button onClick={() => setDarkModeOn(!darkModeOn)}>click me</button>
            
        </div>
    )
}

export default ModeToggler