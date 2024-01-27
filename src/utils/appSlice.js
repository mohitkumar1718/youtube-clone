import { createSlice } from "@reduxjs/toolkit";

const appSlice=createSlice({
    name:'appSlice',
    initialState:{
        iSMenuOpen:true,
    },
    reducers:{
        toggleMenu:(state)=>{
          state.iSMenuOpen=!state.iSMenuOpen;
        },
    }
})
export const {toggleMenu}=appSlice.actions;
export default appSlice.reducer;