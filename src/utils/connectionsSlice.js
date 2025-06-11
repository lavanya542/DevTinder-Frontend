import {createSlice} from '@reduxjs/toolkit'
const connectionsSlice=createSlice({
    name:"connections",
    initialState:[],
    reducers:{
        addConnection:(state,action)=>{
            return action.payload;
        },
        removeConnection:(state,action)=>{
            return null;
        }
    }
})
export default connectionsSlice.reducer;
export const {addConnection,removeConnection} =connectionsSlice.actions;