import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import api from './api/api.jsx'

function App() {
 const[list,setList]=useState([])
 useEffect(()=>{
  const fetchData=async()=>{
    try{
      const response=await api.get('/student')
      setList(response.data)
    }catch(error){
      console.error(error)
    }
  }
  fetchData()
 },[])
  return (
    <>
      { 
        list.map((stu)=>(
          <p key={stu.id}>{stu.id}-{stu.name}-{stu.marks}</p>

      ))}
    </>
  )
}

export default App