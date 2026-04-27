import React from 'react'
import './App.css'
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
import { Routes, Route, Link } from "react-router-dom";
import { Nav } from './Nav.jsx'
import { Home } from './Home.jsx'
import { AboutUs } from './AboutUs.jsx'
import { useState } from 'react'
import LogIn from './LogIn.jsx'
import LogOut from './LogOut.jsx'


{/*const fruits1 = [
  {fruitName: "watermelon", id: 1},
  {fruitName: "passionfruit", id: 2},
  {fruitName: "jackfruit", id: 3},
]*/}

function App() {
  // const [fruits] = React.useState(fruits1);
  const [loggedIn, setLoggedIn] = useState(false);
  const logIn = () => setLoggedIn(true);
  const logOut = () => setLoggedIn(false);

  return(
    <div>
      {loggedIn? 
        (<div> 
          <Home/>
           <LogOut logOut = {logOut}/> 
        </div>)
          : (<LogIn logIn = {logIn}/>)}
    </div>
  )

  {/*<div>
    <div>
      <Nav/>
      <Routes>
        <Route path= "/" element = {<Home/>}></Route>
        <Route path= "/about-us" element = {<AboutUs/>}></Route>
      </Routes>
    </div> */}
    {/*<Intro1/>
    <Card num={Math.floor(Math.random() * 100 + 1)}/>
    <ModeToggler/>
    <GuessOneToThree/>
    <InputAndOnChange/>
    <div><RegisterForm/></div>
    <TextInputWithFocusButton/>
    <CountOne/> 
    <Fruits  fruits = {fruits}  />
    <CountFruits fruits ={fruits} />
  </div>*/}
  
}

export default App
