import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header';
import { Body } from './Body';
import { Footer } from './Footer';

function App() 
{
      const [list,setList] =useState([
        {id:1,sname:"Vinoth",fee:true},
        {id:2,sname:"Shiva",fee:false},
        {id:3,sname:"Harish",fee:true}
      ]);
      const [newStudent, setNewStudent] = useState("");
      const [search, setSearch] = useState("");

      const handleDelete=(id)=>
      {
      const newList=list.filter((ls)=>ls.id!=id)
      setList(newList)
      }
      const handleCheck=(id)=>
      {
         const newList=list.map((ls)=>(ls.id===id)?({...ls,fee:!ls.fee}):(ls))
         setList(newList)
      }
      const handleAdd=()=>
      {
        if(newStudent.trim()){
          const newId = list.length > 0 ? Math.max(...list.map(s => s.id)) + 1 : 1;
          setList([...list, {id:newId, sname:newStudent, fee:false}]);
          setNewStudent("");
        }
      }
  const filteredList = list.filter((ls)=>
    ls.sname.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
        <Header title={"Student List"}/>
        
        <div>
          <input 
            type="text" 
            placeholder="Add new student" 
            value={newStudent}
            onChange={(e)=>setNewStudent(e.target.value)}
          />
          <button onClick={handleAdd}>Add Student</button>
        </div>
        <br/>
        <div>
          <input 
            type="text" 
            placeholder="Search student" 
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
          />
        </div>
        <br/>
        
        <Body list={filteredList}
              handleCheck={handleCheck}
              handleDelete={handleDelete}
        />
           <Footer len={list.length} />
    </>
  )
}

export default App