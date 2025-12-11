import { useState } from 'react'
import './App.css'
import Content from './Content'
import Header from './Header'
function App() {

  /* let city = "Kathmandu";
  let nums = [11, 22, 33];
  let age = 15;*/ 
  let frnds=["Smith","Victor","Nelson","Rohit"]

  const [num, setNum] = useState(50);

  return (
    <>
      {/* Example demo UI */}
      {/* 
        <h1>I am from {city}</h1>
        <p>Lucky numbers: {bums.join(", ")}</p>
        <p>{ true ? "TRUE" : "FALSE"}</p>
        <p>{JSON.stringify({ name: "Rohit", age: 40 })}</p>
        <p>{age >= 18 ? "ADULT" : "MINOR"}</p>

        <h2>State value: {num}</h2>

        <button onClick={() => setNum(num + 1)}>Increase</button>
        <button onClick={() => setNum(num - 1)} style={{ marginLeft: "10px" }}>
          Decrease
        </button>

        {frnds.map((frnd)=> (<p>{frnd}</p>))}
        
        {frnds.map((val,indx)=> (
          <p key={indx}>{val}</p>
        ))}
      */}

      <Header title={"Friends List"} city={"Chennai"} />

      {frnds.length > 0 ? (
        <Content frnds={frnds} />
      ) : (
        <p>List is Empty</p>
      )}
    </>
  )
}

export default App;