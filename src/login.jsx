import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
export default function Login(){
   
    const nav=useNavigate()
 
    const [account,setaccount]=useState([])
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")
  

useEffect(()=>{
   const getuser=JSON.parse(localStorage.getItem("user"))||[]
           setaccount(getuser)
},[]) 
  function Verify(){

   const user = account.find(
      each => each.mail === email && each.password === password
   )

   if(user){
      alert("Successfully Loggedin")
      nav(`/${email}`)

   const userlogged=JSON.parse(localStorage.getItem("login"))||[]
   const data={email:email,password:password}
   userlogged.push(data)
   localStorage.setItem("login",JSON.stringify(userlogged))
   }else{
      alert("Wrong username or Password")
   }

   setemail("")
   setpassword("")
}
    
    return(
        <div className="border border-dashed p-2 my-60 mx-140 ">
            <label htmlFor="Email" className="m-5">Email:</label>
            <input type="email" placeholder="email" onChange={e=>setemail(e.target.value)}  className="border p-4 m-2 text-center"/>
            <br />
            <label htmlFor="Password" className="m-2">Password:</label>
             <input type="password" placeholder="password" onChange={e=>setpassword(e.target.value)} className="border p-4 m-2 text-center" />
             <br />
             <button onClick={Verify} className="shadow-md rounded-2xl mx-35 p-4 w-30 m-2">Login</button>
             <br />
             <input type="checkbox" value="Remember Me" className="ml-32"/>
             <label htmlFor="Remember Me">Remember Me</label>
             <br />
             <button onClick={()=>nav("/register")} className="shadow-md rounded-2xl mx-35 p-4 w-30 m-2">Register</button>
           
        </div>
    )
}