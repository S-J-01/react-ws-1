import { useActionState, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null)
  const [Latestmessage, setLatestMessage] = useState("")

  useEffect(()=>{
    const socket = new WebSocket('ws://localhost:8080')
    

    socket.onopen = ()=>{
      console.log('connected')
      setSocket(socket)
    }

    socket.onmessage = (message)=>{
      console.log(message.data)
      setLatestMessage(message.data)
    }
  },[])

  return (
    <>
     <button onClick={()=>{
      socket?.send("Hello")
     }}>Say Hello</button>
      {Latestmessage}
       
    </>
  )
}

export default App
