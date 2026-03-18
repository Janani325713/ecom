import { useState } from "react"
import {useDispatch, useSelector} from "react-redux"
import { Registered } from "./verify"
import { useNavigate } from "react-router-dom"

export default function Register(){
    const nav=useNavigate()
     const dispatch=useDispatch()
    const [mail,setmail]=useState("")
    const [password,setpassword]=useState("")
    const [confirmpassword,setconfirmpassword]=useState("")
    
    function Verify(){
        const storage=JSON.parse(localStorage.getItem("user"))||[]
        if((/^[a-zA-Z]+@gmail.com$/.test(mail)) && password===confirmpassword){
             storage.map((each,index)=>{
               if(each.mail===mail){
                alert("this mail is already registered")
                return;
               }})
            
                dispatch(Registered({mail,password,confirmpassword}))
                alert("registered successfully")
                nav("/login")
               
        }
        else{
           alert("wrong email or password")
        }
     
    }
    return(
        <div className="flex flex-col justify-center items-center border border-dashed my-40 mx-150 p-5">
            <label htmlFor="email">Email:</label>
            <input type="email" placeholder="email" onChange={e=>setmail(e.target.value)} required className="border p-4 m-4 text-center"/>
            <label htmlFor="password">password:</label>
            <input type="password" placeholder="password" onChange={e=>setpassword(e.target.value)}  required  className="border p-4 m-4 text-center"/>
            <label htmlFor="confirm password">confirm password:</label>
            <input type="password" placeholder="password"  onChange={e=>setconfirmpassword(e.target.value)} required className="border p-4 m-4 text-center"/>
            <button onClick={Verify} className="shadow-md rounded-2xl mx-35 p-4 w-30 m-2">Register</button>
        </div>
    )
}