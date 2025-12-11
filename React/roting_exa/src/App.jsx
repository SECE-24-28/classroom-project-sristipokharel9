import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Link, Routes} from 'react-router-dom'
import NewPost from './NewPost'
import Home from './Home'
import About from './About'
import Gallary from './Gallary'
import PostPG from './PostPG'
import Post from './Post'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ul>
      <li> <Link to="/">Home</Link> </li>
      <li> <Link to="/about">About</Link> </li>
      <li> <Link to="/gallary">Gallary</Link> </li>
      <li> <Link to="/postpage">PostPage</Link> </li> 
    </ul>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/gallary" element={<Gallary />} />
      <Route path="/postpage" element={<PostPG/>} >
        <Route path=":id" element={<Post/>} />
        <Route path="newpost" element={<NewPost />} />
      </Route>


    </Routes>
      
    </>
  )
}

export default App