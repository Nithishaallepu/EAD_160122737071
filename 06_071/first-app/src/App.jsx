import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloWorld from './Components/HelloWorld'
import Greeting from './Components/greeting'
import Counter from './Components/Counter'
import PasswordStrengthChecker from './Components/PasswordStrengthChecker'
import Timer from './Components/Timer'

function App() {
  return (
    <>
    <HelloWorld />
    <Greeting name="Nithuu" />
    <Counter />
    <Timer />
    <PasswordStrengthChecker />
      
    </>
  )
}

export default App