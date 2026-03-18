
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
const pro = [
  "/images/pro4.jpg",
  "/images/pro5.jpg",
  "/images/pro6.jpg",
  "/images/pro7.jpg"
]

export default function Home(){

const nav = useNavigate()
const {email} = useParams()

// const pro = [pro4,pro5,pro6,pro7]

const [update,setupdate] = useState(0)
const [login,setlogin] = useState(false)
const [loginpopup,setloginpopup] = useState("")
const [details,setdetails] = useState([])
const [search,setsearch] = useState("")
const [bool,setbool] = useState(false)
const [product,setproduct] = useState([])
const[research,setresearch]=useState(false)
useEffect(()=>{
    const data = JSON.parse(localStorage.getItem("home")) || []
    setdetails(data)
},[])

useEffect(()=>{
    const time = setTimeout(()=>{
        setloginpopup("login")
        setlogin(true)
    },4000)

    return ()=>clearTimeout(time)
},[])

useEffect(()=>{
    const time = setInterval(()=>{
        setupdate(prev => (prev+1)%pro.length)
    },3000)

    return ()=>clearInterval(time)
},[])

useEffect(()=>{
    const get = JSON.parse(localStorage.getItem("essential")) || []
    setproduct(get)
},[])

function Loginpage(){
    nav("/login")
}

function Left(){
    if(update>0){
        setupdate(prev=>prev-1)
    }else{
        setupdate(pro.length-1)
    }
}

function Right(){
    setupdate(prev=>(prev+1)%pro.length)
}

function Product(index){

    const clickedCategory = details[index].value

    const result = product.filter((sub)=>{
        return clickedCategory.toLowerCase() === sub.subcatvalue.toLowerCase()
    })

    localStorage.setItem("categary", JSON.stringify(result))

    // nav("/categary",{state:{index}})
    nav("/categary", { state: { type:"index", value: index } })

}

function Pro(each){
    const searchinput= each.value
        setsearch(searchinput)
        setresearch(false)
    const result1=details.filter((each,index)=>{
        return  (searchinput.toLowerCase() === each.value.toLowerCase())
    })

    const result2 = product.filter((sub)=>{
        return searchinput.toLowerCase() === sub.subcatvalue.toLowerCase()
    })

    localStorage.setItem("categary", JSON.stringify([...result1,...result2]))

     setTimeout(()=>{
    // nav("/categary",{state:{each}})
    nav("/categary", { state: {type:"search",  value: searchinput } })
  },100)
}

function Search(each){
     const get=each.product
       setsearch(get)
        setresearch(false)
    const result=details.filter((each,index)=>{
        return  get.toLowerCase() === each.value.toLowerCase()})

     const getproduct=product.filter((sub,i)=>{
        return get.toLowerCase()===sub.product.toLowerCase()
     })
     localStorage.setItem("categary", JSON.stringify([...result,...getproduct]))

    setTimeout(()=>{
    // nav("/categary",{state:{each}})
    nav("/categary", { state: {type:"search", value: get } })
  },100)
}
function Validate(){
    if(search==""){
        alert("give me the input")
    }
    else{
         setresearch(false)
    const result=details.filter((each,index)=>{
        return  search.toLowerCase() === each.value.toLowerCase()})

     const getproduct=product.filter((sub,i)=>{
        return search.toLowerCase()===sub.product.toLowerCase()
     })
     localStorage.setItem("categary", JSON.stringify([...result,...getproduct]))

    setTimeout(()=>{
    // nav("/categary",{state:{search}})
    nav("/categary", { state: {type:"search", value: search } })
  },100)
    }
}
function Text(each){
    const searchinput= each.text
        setsearch(searchinput)
        setresearch(false)
    const result1=details.filter((each,index)=>{
        return  (searchinput.toLowerCase() === each.text.toLowerCase())
    })

    const result2 = product.filter((sub)=>{
        return searchinput.toLowerCase() === sub.subcatvalue.toLowerCase()
    })

    localStorage.setItem("categary", JSON.stringify([...result1,...result2]))

     setTimeout(()=>{
    nav("/categary",{state:{type:"search",value:searchinput}})
  },100)
}

 
return(
<div>

{bool && (
<div className="w-4 h-4 animate-spin my-[350px] mx-[800px] border rounded-full border-dashed"></div>
)}

{!bool && (

<div className="flex">

<div className="h-screen bg-gray-200 w-[130px] fixed mr-30">

        <img src="/images/logo.jpg" alt="logo" className="w-15 h-15 rounded-full mx-9 my-3"/>

        <h1 className="mx-5 font-bold">WELCOME!!</h1>
        <h2 className="mx-5 font-bold">categories</h2>

        {details.map((each,index)=>(
        <h2 key={index} onClick={()=>Product(index)} className="ml-8">{each.value}</h2>
        ))}

</div>


<div className="flex flex-col mt-5 ml-[150px] mr-10 w-[1500px]">
<div className="flex justify-between">

<div className="w-[1020px] border h-10 mx-10 flex-col rounded-full border-2">
 <div className="flex"> 
    <input
    type="text"
    placeholder="search"
    onChange={e=>{setsearch(e.target.value),setresearch(true)}}
    value={search}
    className=" text-center mx-[400px] border-none mt-2 "
    />
    <div className="mx-[10px] mt-2 absolute " onClick={Validate}>🔍</div>
 </div>


{research && (
  <div className=" p-2 mx-10 w-[1020px] bg-white absolute">

    {details
      .filter(each =>
        each.value.toLowerCase().includes(search.toLowerCase())||each.text.toLowerCase().includes(search.toLowerCase())
      )
      .map((each,index) => (
        <div>
        <div key={index} onClick={()=>Pro(each)}  className="shadow-md">{each.value}</div>
        <div onClick={()=>Text(each)} className="shadow-md">{each.text}</div>
        </div>
      ))}

    {product
      .filter(each =>
      each.product.toLowerCase().includes(search.toLowerCase()) &&
      details.some(d =>
      d.value.toLowerCase() !== each.product.toLowerCase() ||
      d.text.toLowerCase() !== each.product.toLowerCase()
)
      )
      .map((each,index) => (
        <div key={index} onClick={()=>Search(each)}  className="shadow-md">{each.product}</div>
      ))}

  </div>
)}
</div>


<div>
<button onClick={Loginpage} className="shadow-lg p-2 relative">Login</button>

{login &&
<div onClick={Loginpage} className="bg-blue-300 p-1 m-2 absolute shadow-sm">
{loginpopup}
<sup
onClick={(e)=>{
setlogin(false)
e.stopPropagation()
}}
className=" bg-white mb-8 px-1 py-0.5"
>
x
</sup>
</div>
}

</div>

<h1 className="w-10 rounded-full  h-10 text-black bg-green-300 text-center text-3xl">
{email ? email[0].toUpperCase() : "HI"}
</h1>

</div>

<div className="flex">

<h1 onClick={Left} className="my-50 mx-5 text-3xl">←</h1>

<img
src={pro[update]}
alt=""
className="w-[1000px] h-[300px] rounded-md my-25 mx-20"
/>

<h1 onClick={Right} className="my-50 mx-5 text-3xl">→</h1>

</div>

<div className="grid grid-cols-4 mx-5 my-10 border border-pink-500 border-3">

{details.map((each,index)=>(
<div
key={index}
className="mx-10 my-5 shadow-2xl"
onClick={()=>Product(index)}
>

<img src={each.img} alt="img" className="w-[500px] h-[150px]"/>

<h2 className="text-center">{each.value} || accessaries</h2>

<h2 className="text-center p-5">{each.text}</h2>

<h1 className="text-center">&#8377;{each.price}</h1>

</div>
))}

</div>

</div>

</div>

)}

</div>
)
}