import { createSlice } from "@reduxjs/toolkit";
const Check=createSlice({
    name:"counter",
    initialState:{users:[]},
    reducers:{
      
        Registered:(state,actions)=>{
            const storage=JSON.parse(localStorage.getItem("user"))||[]
           state.users=[...state.users,actions.payload]
           const data=actions.payload
          
           storage.push(data)
           localStorage.setItem("user",JSON.stringify(storage))
           
        }
    }
})
export const {Registered}=Check.actions;
export default Check.reducer;
