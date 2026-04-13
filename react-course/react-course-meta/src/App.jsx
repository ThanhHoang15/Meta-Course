
import './App.css'
import Nav from './components/Nav.jsx'
import Intro1 from './components/Intro1.jsx'  
import Card from './Card.jsx'
import ModeToggler from './ModeToggler.jsx'
import GuessOneToThree from './GuessOneToThree.jsx'
import InputAndOnChange from './InputAndOnChange.jsx'
import RegisterForm from './RegisterForm.jsx'

export function Header(){
  return <h1>HELLO</h1>
}

function App() {
return(
  <div>
    <Card num={Math.floor(Math.random() * 100 + 1)}/>
    <ModeToggler/>
    <GuessOneToThree/>
    <InputAndOnChange/>
    <div><RegisterForm/></div>

  </div>
)
}

export default App
