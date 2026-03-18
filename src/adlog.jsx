// import { useState } from "react"
// import { useNavigate } from "react-router-dom"
// export default function Adlog(){
//     const nav=useNavigate()
//     const [admail,setadmail]=useState("")
//     const [adpassword,setadpassword]=useState("")

//     function Login(){
//         if(admail=="Admin@gmail.com" && adpassword=="1234"){
//           nav("/admin")
//         }
//         else{
//             alert("wrong email or password")
//         }
//     }
//     return(
//         <div>
  
//         <div className="flex flex-col justify-center items-center border border-dashed my-70 mx-150">
//                    <h1 className="font-bold my-1">ADMIN LOGIN PAGE</h1>
//             <input type="email" onChange={e=>setadmail(e.target.value)} required placeholder="gmail" className="border text-center p-4 m-4" />
//             <input type="password" onChange={e=>setadpassword(e.target.value)} placeholder="password" className="border text-center p-4 m-2 "/>
//             <button onClick={Login} className=" rounded-2xl m-4 p-4 shadow-lg"> login</button>
//         </div>
//         </div>
//     )
// }