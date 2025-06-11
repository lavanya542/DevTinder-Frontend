import { configureStore } from "@reduxjs/toolkit";
import userSlice from './userSlice'
import feedReducer from './feedSlice'
import connectionsReducer from './connectionsSlice'
import requestReducer from './requestSlice'
const appStore=configureStore({
    reducer:{user:userSlice,
        feed:feedReducer,
        connections:connectionsReducer,
        requests:requestReducer

    }
});
export default appStore;