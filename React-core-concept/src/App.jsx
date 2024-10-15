import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite+React</h1>
      <Device name="laptop" price="55"></Device>
      <Device name="mobile" price="45"></Device>
      <Device name="watch" price="25"></Device>
      <Person></Person>
      <Student grade={7} score={99} isPassed={true}></Student>
      <Student grade={12} score={85} isPassed={true}></Student>
      <Student></Student>
      <Developer></Developer>
    </>
  )
}
function Device(props){
  console.log(props)
  return <h2>This Device: {props.name} price: {props.price}</h2>
}
function Person(){
  const age = 25;
  const money = 980;
  const person = {name: "Mr. Y", age:12}
  return <h3>I am a {person.name} with age: {age+money}</h3>
}

// const {grade, score} = {grade: '7', score: '99'};
function Student({grade="Guest", score="00", isPassed="No"}){
  console.log(grade, score, isPassed)
  return <div className='student'>
    <h3>This a student function in React</h3>
    <p>Class: {grade}</p>
    <p>Score : {score}</p>
    <p>Passed: {isPassed==true ? "Yes" : "No"}</p>
  </div>
}
function Developer(){
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '20px'
  }
  return(
    <div style={developerStyle}>
      <h3>Devo Dev</h3>
      <p>Something</p>
    </div>
  )
}


export default App
