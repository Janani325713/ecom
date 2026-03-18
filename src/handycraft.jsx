// import paper1 from "./handycraft/paper1.jpg"
// import paper2 from "./handycraft/paper2.jpg"
// import paper3 from "./handycraft/paper3.jpg"
// import decor5 from "./decors/decor5.jpg"
// import { useNavigate } from "react-router-dom"
// export default function Handycraft(){
//     const nav=useNavigate()
//     const handycraft=[{img:paper1,text:"colorful crafts",price:500},{img:paper2,text:"flower craft",price:700},{img:paper3,text:"lighting crafts",price:900},{img:decor5,text:"paper craft",price:300}]

//     function Details(i){
    
//                 nav(`/addtocart/${i}`,{state:{product:handycraft}})
//             }
    
//     return(
//         <div className="grid grid-cols-4 mx-9 my-50">
//             {handycraft.map((each,i)=>(
//              <div  onClick={()=>Details(i)} className="shadow-lg mx-5 w-[250px]">
//                 <img src={each.img} alt={each.text}  className="w-[250px] h-[200px]"/>
//                 <h2 className="text-center">{each.text}</h2>
//                 <h2 className="text-center">&#8377;{each.price}</h2>
//              </div>
//             ))}
//         </div>
//     )
// }