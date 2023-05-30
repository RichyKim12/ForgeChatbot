import React from 'react'
import {useState, useEffect} from 'react'
import axios from "axios"
import "./App.css"
function App() {

  // probs need a useState to fetch Api responses
  // Need a textarea/submission usestate and const
  const [apiResponse, setApiResponse] = useState('')

  const [userResponse, setUserResponse] = useState('')
  useEffect(() => {
    fetch("http://localhost:9000/")
    .then((res) => setApiResponse(res))
  }, [])  

  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post("http://localhost:9000/getResponse", {
        content: userResponse,
    })
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
  }

  return (
    <>
      <div> Chatbot App </div>
      <form onSubmit = {handleSubmit} className = "Submit"> 
        <input
          type = "text"
          required
          value = {userResponse}
          onChange = {(e)=>setUserResponse(e.target.value)}
        >
        </input>
      </form>
    </>
  )
}

export default App