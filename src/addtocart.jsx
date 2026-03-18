import { useEffect, useState } from "react"
import { useLocation, useParams } from "react-router-dom"

export default function Addtocart(){
    const {i}=useParams()
    const index1=Number(i)
    const[data,setdata]=useState([])
    // const location=useLocation()
    // const state=location.state
    // const data=state.product||state.value
    const [small,setsmall]=useState(false)
    const [medium,setmedium]=useState(false)
    const [large,setlarge]=useState(false)

  useEffect(()=>{
       const get=JSON.parse(localStorage.getItem("categary"))||[]
       setdata(get)
  },[])
    function Added(){
       if(small||medium||large){
            alert("product is successfully added to cart")
            return;
        }
        else{
            alert("select the field size")
        }
        
        
    }
    function Order(){
        if(small||medium||large){
            alert("product is ordered successfully")
            return;
        }
        else{
            alert("select the field size")
        }
        
    }
    return(
        <div>
            {data.map((each,index)=>{
                if(index1===index){
                return(
                   <div  className="grid sm:grid-cols-1 md:grid-cols-2 w-[1500px] h-[650px] m-[20px] shadow-lg">
                        <div className="w-[750px] ">
                            <img src={each.img} alt={each.text} className="w-[730px] h-[630px] m-2"/>
                        </div>
                        <div className="flex flex-col w-[750px] m-[20px] items-center justify-center" >
                                    <h1 className="text-center"><span className="font-bold ">Product:</span>{each.text}</h1>
                                <h2 className="text-center"><span className="font-bold">Price:</span>&#8377;{each.price}</h2>
                                <div className="flex my-[20px] mx-[160px] ">
                                    <h2 className="font-bold">size:</h2>
                                    <h2  onClick={()=>{setsmall(true),setmedium(false),setlarge(false)}}  className={`border rounded-lg font-bold mx-10 p-2 ${small?("bg-blue-500"):""}`}>small</h2>
                                    <h2 onClick={()=>{setsmall(false),setmedium(true),setlarge(false)}} className={`border  rounded-lg font-bold mx-10 p-2 ${medium?("bg-blue-500"):""}`}>medium</h2>
                                    <h2 onClick={()=>{setsmall(false),setmedium(false),setlarge(true)}} className={`border  rounded-lg font-bold mx-10 p-2 ${large?("bg-blue-500"):""}`}>large</h2>
                                </div>
                                <button  onClick={Added} className="bg-green-300 rounded-sm font-bold w-[500px] my-[20px] mx-[120px]">Add To Cart</button>
                                <button onClick={Order} className="bg-green-300 rounded-sm font-bold w-[500px] my-[20px] mx-[120px]">Buy Now</button>
                        </div>
                   </div>
                
            )}
})}
      </div>
    )
}