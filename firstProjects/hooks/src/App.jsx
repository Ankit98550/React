import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
// let counter=6;
let [CurrCounter,SetCounter]=useState(6)
const AddValue=()=>{
  console.log("Add value",CurrCounter)
  CurrCounter=CurrCounter+1;
  SetCounter(CurrCounter);
  console.log("Add value",CurrCounter)

}
const RemoveValue=()=>{
  console.log("Remove value",CurrCounter)

  CurrCounter=CurrCounter-1;
  SetCounter(CurrCounter);
  console.log("Remove value",CurrCounter)

}
  return (
    <>
      <h1>rohit  {CurrCounter}</h1>
      <h1>count value {CurrCounter}</h1>
      <button onClick={AddValue}>Add Button</button>
      <br></br>
      <button onClick={RemoveValue}>Remove Button</button>
    </>
  )
}

export default App
