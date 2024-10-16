import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <Programmer name="Hayat"></Programmer>
      <Like coding = "Programming" bike = "Bike Riding" game = "Free Fire"></Like>
      {/* <Like like = "Bike Riding"></Like> */}
    </>
  )
}



// normal component 
function Programmer({name}){
  return(
    <div>
      <h1>I am a {name} </h1>
      <p>currently purssing diploma in Computer Scince and Technology</p>
    </div>
  )
}

function Like({coding , bike , game}){
  return (
    <div className='my-card'>
      <h1>1. I Like {coding} </h1>
      <h1>2. I Like {bike} </h1>
      <h1>3. I Like {game} </h1>
    </div>
    
  )
}







export default App
