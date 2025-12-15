import './App.css'
import Home from './Home'
import Search from './Search'
import AddPost from './AddPost'
import EditPost from './EditPost'

import { Link, Route, Routes } from 'react-router-dom'
import { DataProvider } from './context/DataContext'

function App() {

  return (
    <DataProvider>

      <ol>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/newpost">NewPost</Link></li>
      </ol>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newpost" element={<AddPost />} />
        <Route path="/editpost/:id" element={<EditPost/>}/>
      </Routes>

    </DataProvider>
  )
}

export default App