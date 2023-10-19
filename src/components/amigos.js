import React from "react"
import { Amigo } from "./amigo"

export const Amigos = ({amigos}) => {

    return(  
    <ul>
       {amigos.map((amigo, index) => {
    
        return <Amigo nombre={amigo} key= {index} />
    
        })}
    </ul>
    ) 
  
}