import {useSelector,useDispatch} from 'react-redux'
import axios from 'axios'
import {BASE_URL} from "../utils/constants"
import {addFeed} from '../utils/feedSlice'
import FeedCard from "./FeedCard"
import {useEffect} from 'react'
const Feed=()=>{
    const feed=useSelector((store)=>store.feed);
    const dispatch=useDispatch();
    const getFeed=async ()=>{
        console.log(feed);
        if(feed) return;
        try{
            const res=await axios.get(BASE_URL+"/feed",{withCredentials:true});
            dispatch(addFeed(res?.data));
            console.log(res);
            console.log(feed);
            
        }catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        getFeed();
        
    },[])
    if(!feed||feed.data.length===0){
        return <div className="my-10 text-center">No feed to show</div>
      }
    return(
        (feed&&<div><FeedCard data={feed.data[0]}/></div>)
    )
}
export default Feed