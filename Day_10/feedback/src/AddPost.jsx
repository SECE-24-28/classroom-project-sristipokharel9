import React from 'react'

const AddPost = ({title,setTitle,body,setBody,handleSubmit}) =>{
    return(
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name="" id="" placeholder='Title'
                       value={title}
                       onChange={(e)=>setTitle(e.target.value)}
                />
                <textarea name="" id="" placeholder='Body'
                            value={body}
                            onChange={(e)=>setBody(e.target.value)}
                ></textarea>
                <button type='submit'>Save</button>
        </form>
        </div>
    )
}

export default AddPost