import { useState ,useEffect} from "react"
import { useNavigate } from "react-router-dom"
export default function Admin(){
    const[file,setfile]=useState(null)
    const[text,settext]=useState("")
    const[price,setprice]=useState("")
    const[value,setvalue]=useState("categaries")
    const[product,setproduct]=useState("")
    const[dropdown,setdropdown]=useState(false)
    const[subcatvalue,setsubcatvalue]=useState("")
    const[subcategary,setsubcategary]=useState(false)
    const[storage,setstorage]=useState([])
    const[result,setresult]=useState([])
    const nav=useNavigate()
useEffect(()=>{
    let gett = JSON.parse(localStorage.getItem("home")) || []
    setstorage(gett)

     let get=JSON.parse(localStorage.getItem("essential"))||[]
     setresult(get)
},[])
function Add(){

if(!file || !text || !price || !value){
alert("fill the empty field")
return;
}

const reader = new FileReader()

reader.onload = function(){

let get = JSON.parse(localStorage.getItem("home")) || []

let set = {
img: reader.result,
text: text,
price: price,
name: file.name,
value: value
}

const exist = get.find((each)=> each.name === file.name)

if(exist){
alert("img already exists")
return
}

get.push(set)

localStorage.setItem("home",JSON.stringify(get))

nav("/")
}

reader.readAsDataURL(file)

}


function Sub(){
    setdropdown(false)
    setsubcategary(true)
    setvalue("categary")
}

function Product(){
    // function Product(){

if(!file || !text || !price || !subcatvalue || !product){
alert("fill the empty field")
return;
}

const reader = new FileReader()

reader.onload = function(){

let set={
img: reader.result,
text:text,
price:price,
name:file.name,
subcatvalue:subcatvalue,
product:product
}

let get = JSON.parse(localStorage.getItem("essential")) || []

get.push(set)

localStorage.setItem("essential", JSON.stringify(get))

alert("product added successfully")

nav("/")
}

reader.readAsDataURL(file)
}

    
    return(
    
        <div className="flex  border border-dashed  center  "> 
            <div className="bg-gray-300 w-[350px] h-screen">
                <h1 className="text-center">Categaries</h1>
                <select onChange={(e)=>{setvalue(e.target.value),setdropdown(true),setsubcategary(false)}} value={value} className="m-4">
                    <option value="categaries">Categaries</option>
                    <option value="Kids" >Kids</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Shoes">Shoes</option>
                    <option value="Bags">Bags</option>
                    <option value="Gifts">Gifts</option>
                </select>
                <button onClick={Sub} className="m-3">Sub Categaries</button>

            </div>

            <div className="w-[500px] mx-[400px] my-[80px]">
                {dropdown && (
                    <div className="flex flex-col border p-2 m-4">
                    <input type="text" value={value} className="border  mx-10 w-80 p-4 m-3" placeholder="categary name"/>
                    <input type="file" onChange={e=>setfile(e.target.files[0])}  className="border mx-10 w-80 p-4"/>
                    <input onChange={e=>settext(e.target.value)} className="rows-4 cols-40 border w-80 m-10 p-4" placeholder="product name"></input>
                    <input type="number" onChange={e=>setprice(e.target.value)} className="border mx-10 w-80 my-3 p-4" placeholder="price"/>
                    <button   onClick={Add} className="shadow-md rounded-2xl mx-40 p-4 w-20 m-2">add</button>
                        <button onClick={()=>nav("/collections")} className="shadow-md rounded-2xl mx-35 p-4 w-30 m-2">Collections</button>
                    <button onClick={()=>nav("/userdetails")} className="shadow-md rounded-2xl mx-35 p-4 w-30 m-2">User Details</button>
                    </div>
                )}
            </div>
             <div className="w-[900px] mr-[1000px]  my-[30px]">
                {subcategary && (
                    <div className="flex flex-col border p-2 m-4">
                    <input type="text" onChange={e=>setproduct(e.target.value)} className="border  mx-10 w-80 p-4 m-3" placeholder="product name"/>
                    <input type="file" onChange={e=>setfile(e.target.files[0])}  className="border mx-10 w-80 p-4"/>
                  <select 
  onChange={(e)=>setsubcatvalue(e.target.value)} 
  value={subcatvalue}
  className="border  h-10 my-5 mx-10 "
>
  <option value="">Select Category</option>
  {storage.map((each,index)=>(
     <option key={index} value={each.value}>
       {each.value}
     </option>
  ))}
</select>

                 <textarea onChange={e=>settext(e.target.value)} className="rows-4 cols-40 border w-80 my-4 mx-10 p-4" placeholder="description"></textarea>
                    <input type="number" onChange={e=>setprice(e.target.value)} className="border mx-10 w-80 my-3 p-4" placeholder="price"/>
                    <button   onClick={Product} className="shadow-md rounded-2xl mx-40 p-4 w-20 m-2">add</button>
                        <button onClick={()=>nav("/collections")} className="shadow-md rounded-2xl mx-35 p-4 w-30 m-2">Collections</button>
                    <button onClick={()=>nav("/userdetails")} className="shadow-md rounded-2xl mx-35 p-4 w-30 m-2">User Details</button>
                    </div>
                )}
                </div>
            <div>

            </div>
         
        </div>
    )
}