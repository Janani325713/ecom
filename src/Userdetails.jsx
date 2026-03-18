import { useEffect, useState } from "react"

export default function Userdetails(){
    const[user,setuser]=useState([])
    useEffect(()=>{
     const data=JSON.parse(localStorage.getItem("login"))||[]
     setuser(data)
    },[])
    return(
        <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold">Users-SignedIn</h1>
         {user.map((each,index)=>(
            <h3 className="text-center">{each.email}-{each.password}</h3>
         ))}
        </div>
    )
}