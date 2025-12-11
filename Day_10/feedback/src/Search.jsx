import React, { useContext } from "react";
import DataContext from "./context/DataContext";

const Search = ({search,setSearch}) => {
    const{num}=useContext(DataContext)
  return (
<div>
    <h1>{num}</h1>
     <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}placeholder="Search here..." />
</div>
  )
}
export default Search