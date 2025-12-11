import { useState, useEffect } from 'react'       
import { format } from 'date-fns'

import './App.css'
import api from './api/post'
import Home from './Home'
import Search from './Search' 
import AddPost from './AddPost'
import { DataProvider } from './context/DataContext'


function App() {
  const [posts, setPosts] = useState([])
  const [search,setSearch] = useState("")
  const [searchResults,setSearchResults] = useState([])
  const [title,setTitle]=useState('')
  const [body,setBody]=useState('')

  //to fetch initial info
  //it will load only once
  useEffect(()=>  
  {
    const fetData=async()=>
    {
      const res=await api.get("/feedback")
      setPosts(res.data)  
    }
    fetData();
  },[])


  //search
  useEffect(()=>{
    const filtered=posts.filter((post)=>(post.title).includes(search))
    setSearchResults(filtered)
  },[posts,search])
  const handleSubmit=(e)=>
  {
    e.preventDefault()
    const id=(posts.length)?(Number(posts[posts.length-1].id)+1):(1)
    const datetime=format(new Date(), "MMM dd,yyyy pp")
    const newObj={id:id,title:title,datetime:datetime,body:body}
    api.post("/feedback",newObj)
    const newList=[...posts,newObj]
    setPosts(newList)
    setTitle('')
    setBody('')
  }
  return (
    <>
    <DataProvider>
     <Search search={search} setSearch={setSearch} />
     <hr />
     <AddPost title={title} setTitle={setTitle} body={body} setBody={setBody} handleSubmit={handleSubmit}/>
     <Home searchResults={searchResults}/>
     </DataProvider>


    </>
  )
}

export default App