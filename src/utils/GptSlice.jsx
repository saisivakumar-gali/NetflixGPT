import { createSlice } from "@reduxjs/toolkit";

const GptSlice=createSlice({
    name:"Gpt",
    initialState:{
        ShowGptSearch:false,
    },
    reducers:{
        ToggleGptSearchView:(state,action)=>{
            state.ShowGptSearch=!state.ShowGptSearch;
        },
    }
})

export const {ToggleGptSearchView}=GptSlice.actions;
export default GptSlice.reducer;