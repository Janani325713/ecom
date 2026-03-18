// import { useNavigate } from "react-router-dom"
// import gift3 from "./gift/gift3.jpg"
// import gift5 from "./gift/gift5.jpg"
// import gift6 from "./gift/gift6.jpg"
// import gift7 from "./gift/gift7.jpg"
// export default function Gifts(){
//     const nav=useNavigate()
//     const gift=[{img:gift3,text:"Bouquet",price:1000},{img:gift5,text:"Teddy",price:500},{img:gift6,text:"Chocolates",price:600},{img:gift7,text:"Asthetics",price:2000}]
//     function Add(index){
//         const filter=gift.map((each,i)=>{
//             if(i==1 && i===index){
//             return nav("/bouquet")
//             }
//            else if(i===2 && i===index){
//             nav("/teddy")
//            }
//            else if(i===3 && i===index){
//             nav("/chocolates")
//            }
//            else{
//             nav("/asthetics")
//            }
//         })

      
           
        
//     }
//     return(
//         <div>
//             <div className="grid grid-cols-4">
//             {gift.map((each,index)=>(
//                 <div key={index} onClick={()=>Add(index)}>
//                     <img src={each.img} alt={each.text}/>
//                     <h2>{each.text}</h2>
//                     <h2>&#8377;{each.price}</h2>
//                 </div>
//             ))}
//              </div>
//         </div>
//     )
// }