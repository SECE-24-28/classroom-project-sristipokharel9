import React from 'react'
const Content=({frnds})=>
{
    return(
        <div>
            <ul>
                {
                    frnds.map((val,indx)=>(
                        <li key={indx}>{val}</li>
                    
                    ))
                }
            </ul>
        </div>
    )
}
export default Content