import {createSlice} from '@reduxjs/toolkit'
const requestSlice=createSlice({
    name:"requests",
    initialState:[],
    reducers:{
        addRequests:(state,action)=>{
            return action.payload;
        },
        removeRequest:(state,action)=>{
            state=state.filter((r)=>(r._id!==action.payload));
            return ;
        }
    }
})
export default requestSlice.reducer;
export const {addRequests,removeRequest} =requestSlice.actions;