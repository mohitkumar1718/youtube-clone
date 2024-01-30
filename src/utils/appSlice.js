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
        closeMenu:(state)=>{
            state.iSMenuOpen=false;
        } 
    }
})
export const {toggleMenu,closeMenu}=appSlice.actions;
export default appSlice.reducer;