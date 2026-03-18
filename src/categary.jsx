
import { use, useEffect, useState } from "react"
import { useLocation, useParams ,useNavigate} from "react-router-dom"

export default function Categary(){
    const[result,setresult]=useState([])
    const[admin,setadmin]=useState([])
    const[product,setproduct]=useState([])
   const location = useLocation()
// const data = location.state?.data 
    const nav=useNavigate()
    const { type, value } = location.state || {}



const [selected, setSelected] = useState(null)

useEffect(() => {
  if (type === "index") {
    setSelected(admin[value] || product[value])
  } 
  else if (type === "each") {
    setSelected(value)
  } 
  else if (type === "search") {
    setSelected({ value })
  }
}, [type, value, admin, product])

    useEffect(()=>{
      const get=JSON.parse(localStorage.getItem("categary"))||[]
      setresult(get)
      const admin=JSON.parse(localStorage.getItem("home"))||[]
      setadmin(admin)
      const product=JSON.parse(localStorage.getItem("essential"))||[]
      setproduct(product)
    },[])
//  const selected = admin.find((each,i)=> i == data)||product.find((each,i)=>i==data)

    return(
        <div>
          
{selected && <h1 className="flex justify-center items-center text-xl">category: {selected.value}</h1>}
              <div className="grid grid-cols-4 m-4 p-4 p-2 m-4 border-2 border-pink-500">
            {result.map((each,i)=>(
                        <div  onClick={()=>nav(`/addtocart/${i}`)} className="shadow-2xl">
                            <img src={each.img} alt={each.text} className="w-[500px] "/>
                            <h2 className="text-center">{each.text}</h2>
                            <h2 className="text-center">&#8377;{each.price}</h2>
                            <h2 className="text-center">
                                {each.subcatvalue}
                            </h2>
                            <h2 className="text-center">{each.product}</h2>
                        </div>
            
            ))}
            </div>
        </div>
    )
}
