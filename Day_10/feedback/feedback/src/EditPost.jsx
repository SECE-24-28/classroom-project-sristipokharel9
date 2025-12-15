import React, {useContext} from 'react'
import {useParams} from 'react-router-dom'
import DataContext from './context/DataContext'


export const EditPost = () => {
    const{posts,handleDelete}=useContext(DataContext)
    const{id}=useParams()
    const post=posts.find((p)=>p.id.toString()===id)

    if(!post)
    return(
    <div className="no-data">
        <h1>THere is no data</h1>
    </div>
)
  return (
    <div className="edit-post"><h1>EditPost</h1>
    <hr />
    <input type="text" value={post.title} readOnly /> <br />
    <textarea value={post.body} readOnly />
    <br />
    <button onClick={()=>handleDelete(post.id)}>Delete</button>
    </div>

  )
}

export default EditPost