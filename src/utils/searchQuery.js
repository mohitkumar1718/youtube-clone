import { createSlice } from "@reduxjs/toolkit";

const searchQuery=createSlice({
    name:"SearchQuery",
    initialState:{
        results:[],
    },
    reducers:{
        addtoSearchQuery:(state,action)=>{
            state.results=action.payload;
        }
    }
})

export const {addtoSearchQuery}=searchQuery.actions;
export default searchQuery.reducer;