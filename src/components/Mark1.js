import React from 'react'
import { useState } from 'react'

let Mark1= ()=>{
    let [text,Settext]=useState('')
    function changetext(event){
        Settext(event.target.value)
    }
    return (
        <div className='mark1'>
            <div className='preview'>
            <h1><strong>{text}</strong></h1>    
             <textarea onChange={changetext}>
            </textarea>   
            </div>
        </div>
    )
}
export default Mark1

