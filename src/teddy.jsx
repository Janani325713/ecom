// import { useNavigate } from "react-router-dom"
// import teddy1 from "./teddy/teddy1.jpg"
// import teddy2 from "./teddy/teddy2.jpg"
// import teddy3 from "./teddy/teddy3.jpg"
// import teddy4 from "./teddy/teddy4.jpg"
// export default function Teddy(){
//     const teddy=[{img:teddy1,text:"Teddy1",price:3000},{img:teddy2,text:"pinkish white||teddy",price:4000},{img:teddy3,text:"Teddy3",price:1500},{img:teddy4,text:"Teddy4",price:2000}]
//     const nav=useNavigate()
//     function Teddy(i){
//        nav(`/addtocart/${i}`,{state:{product:teddy}})
//     }
    
    
//     return(
//         <div className="grid grid-cols-4 mx-5 my-10"> 
//          {teddy.map((each,i)=>(
//             <div onClick={()=>Teddy(i)} className=" mx-10 my-5 shadow-md">
//             <img src={each.img} alt={each.text} className="w-[500px] h-[150px]"/>
//             <h2 className="text-center">{each.text}</h2>
//             <h2 className=" text-center">&#8377;{each.price}</h2>
//             </div>
//          ))}
//         </div>
//     )
// }