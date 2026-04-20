import React from 'react'
import './App.css'
import Nav from './components/Nav.jsx'
import Card from './Card.jsx'
import ModeToggler from './ModeToggler.jsx'
import GuessOneToThree from './GuessOneToThree.jsx'
import InputAndOnChange from './InputAndOnChange.jsx'
import RegisterForm from './RegisterForm.jsx'
import TextInputWithFocusButton from './TextInputWithFocusButton.jsx'
import CountOne from './CountOne.jsx'
import {Footer, Intro1} from './components'
import Fruits from './Fruits.jsx'
import CountFruits from './CountFruits.jsx'


const fruits1 = [
  {fruitName: "watermelon", id: 1},
  {fruitName: "passionfruit", id: 2},
  {fruitName: "jackfruit", id: 3},
]

function App() {
  const [fruits] = React.useState(fruits1);


return(
  <div>
      {/*<Intro1/>
    <Card num={Math.floor(Math.random() * 100 + 1)}/>
    <ModeToggler/>
    <GuessOneToThree/>
    <InputAndOnChange/>
    <div><RegisterForm/></div>
    <TextInputWithFocusButton/>
    <CountOne/> */}
    <Fruits  fruits = {fruits}  />
    <CountFruits fruits ={fruits} />

  </div>
)
}

export default App
