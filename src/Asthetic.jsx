// import { useNavigate } from "react-router-dom"
// import asthetic1 from "./asthetic/asthetic1.jpg"
// import asthetic2 from "./asthetic/asthetic2.jpg"
// import asthetic3 from "./asthetic/asthetic3.jpg"
// import asthetic4 from "./asthetic/asthetic4.jpg"
// export default function Asthetic(){
//     const asthetic=[{img:asthetic1,text:"asthetic1",price:200},{img:asthetic2,text:"asthetic2",price:500},{img:asthetic3,text:"asthetic3",price:600},{img:asthetic4,text:"asthetic4",price:700}]
//     const nav=useNavigate()


//     function Asthetic(i){
//         nav(`/addtocart/${i}`,{state:{product:asthetic}})
//     }
//     return(
//          <div className="grid grid-cols-4 mx-5 my-10"> 
//          {asthetic.map((each,i)=>(
//             <div onClick={()=>Asthetic(i)} className=" mx-10 my-5 shadow-md">
//             <img src={each.img} alt={each.text} className="w-[500px] h-[150px]"/>
//             <h2 className="text-center">{each.text}</h2>
//             <h2 className="text-center">&#8377;{each.price}</h2>
//             </div>
//          ))}
//         </div>
//     )
// }