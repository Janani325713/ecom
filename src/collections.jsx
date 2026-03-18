import { useEffect, useState } from "react"

export default function Collections(){
     const[index,setindex]=useState()
     const[img,setimg]=useState("")
     const[text,settext]=useState("")
     const[price,setprice]=useState()
    const [data,setdata]=useState([])
    const [edit,setedit]=useState(false)
    useEffect(()=>{
        const get=JSON.parse(localStorage.getItem("admin"))||[]
        setdata(get)
    },[])

    function Delete(index){
        const filter=data.filter((each,i)=>index!==i)
        setdata(filter)
        localStorage.setItem("admin",JSON.stringify(filter))
    }

    function Edit(index){
        setedit(true)
        setindex(index)
         settext(data[index].text)
        setprice(data[index].price)
        
    }
 function Ok(){
 const updated = data.map((each,i)=>{
    if(i===index){
        return {
            img: img ? URL.createObjectURL(img) : each.img,
            text: text,
            price: price
        }
    }
    else{
        return each
    }
 })
 setdata(updated)
 localStorage.setItem("admin",JSON.stringify(updated))
 setedit(false)
}
    return(
        <div>
        {edit && (<div>
         {data.map((each,i)=>(
           (i===index)?(<div className="flex  flex-col justify-center items-center border border-dashed p-4 m-4 my-50 mx-130">
            <h2 className="m-7 font-bold">EDIT</h2>
            <input type="file" value={img} onChange={e=>setimg(e.target.files[0])} className="border p-2 m-2"/>
            <input type="text" value={text}   onChange={e=>settext(e.target.value)} className="border p-2 m-2"/>
            <input type="text" value={price} onChange={e=>setprice(e.target.value)} className="border p-2 m-2"/>
            <button className=" p-2 shadow-md" onClick={Ok}>Ok</button><br />
            <button onClick={()=>setedit(false)} className=" p-2 shadow-md">Cancel</button>
           </div>):null
         ))}
        </div>)}
       {!edit && (<div className="grid grid-cols-4 m-5">
          {data.map((each,index)=>(
            <div className="shadow-lg m-5 ">
            <img src={each.img} alt={each.text} className="w-[700px] h-[300px]" />
            <h2 className="text-center">{each.text}</h2>
            <h2 className="text-center">{each.price}</h2>
            <button onClick={()=>Delete(index)} className="border mx-35">Delete</button><br />
            <button onClick={()=>Edit(index)} className="border mx-37">Edit</button>
            </div>
          ))}
        </div>)}
        </div>
    )
}