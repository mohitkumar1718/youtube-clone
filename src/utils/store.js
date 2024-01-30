import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import searchQuery from "./searchQuery";
const store=configureStore({
    reducer:{
       app:appSlice ,
       search:searchSlice,
       chat:chatSlice,
       query:searchQuery,
    }
})
export default store;