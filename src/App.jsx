import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'


function App() {
  
  const [jockes, setJockes] = useState([])


  useEffect(()=>{
    axios.get('/api/okes')
    .then((response)=>{
      setJockes(response.data)
      console.log(setJockes)
    })
    .catch((error)=>{
      console.log(error)

    })

  })
  return (
    <>
     <h1>hi</h1>
     <p>JOKES:{jockes.length}</p>

     {
      jockes.map((joke,index)=>(
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>

      ))
     }
    </>
  )
}

export default App
