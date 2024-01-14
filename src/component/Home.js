import React, { useState } from 'react'

export default function Home(props) {
    console.warn("home",props)
    console.warn("items",props.items)
    const[input,setinput]=useState('')
  return (
    <div>
        <h1>TodoList(using Redux)</h1>
        
       <input className="input"placeholder='Add Here'onChange={(e)=>{setinput(e.target.value)}}></input>
       <button  className="btn" onClick={()=>{props.addtolisthandler(input)}}>ClickToAdd</button>
      
    {
       Array.isArray(props.items) && props.items.map(({Id,data})=>{
            return(
                <div key={Id} className='text-wrapper' >
                
                <div className='data'>  <h3 >{data}   </h3></div>
               
                <div><button className="btn-delete"onClick={()=>{props.deletetolisthandler(Id)}}>Delete</button></div>
               

                </div>
                
            )
           
        })
    }
      
    </div>
  )
}
