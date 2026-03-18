// import { useEffect, useState } from "react"
// import { useParams } from "react-router-dom"

// export default function Aside(){
//     const {index}=useParams()
//     const[admin,setadmin]=useState([])
//     const[products,setproducts]=useState([])
//     //  const i=admin[index].value
//     // const [categary,setcategary]=useState("")
// useEffect(()=>{
//  const get1=JSON.parse(localStorage.getItem("admin"))||[]
//  const get2=JSON.parse(localStorage.getItem("products"))||[]
//  setadmin(get1)
//  setproducts(get2)
// },[])
// const i = admin[index]?.value

// return(
// <div>

// {products
// .filter((each)=> i === each.subcatvalue)
// .map((each,index)=>(
// <div key={index}>
// <img src={each.img} alt={each.product} width="200"/>
// <h2>{each.price}</h2>
// </div>
// ))}

// </div>
// )

// }
    // return(
    //     <div>
    //      {products.filter((each,index)=>{
    //            if(i===each.subcatvalue){
    //             <div>
    //            <img src={each.img} alt={each.value} />
    //            <h2>{each.price}</h2>
    //            </div>
    //         }
    //      })}
    //     </div>
    // )
