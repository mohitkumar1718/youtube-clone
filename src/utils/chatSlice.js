import { createSlice } from "@reduxjs/toolkit";

const chatSlice=createSlice({
    name:"chat",
    initialState:[],
    reducers:{
        addChatMessege:(state,action)=>{
            state.splice(15,1)
           state= state.unshift(action.payload);
        }
    }
})
export const {addChatMessege}=chatSlice.actions
export default chatSlice.reducer