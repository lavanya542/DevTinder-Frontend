import {BASE_URL} from '../utils/constants'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import {removeFeed} from '../utils/feedSlice'
const FeedCard=(data)=>{
  console.log(data);
  const dispatch=useDispatch();
  const handleRequest=async (status,userId)=>{
    try{
      const res=await axios.post(BASE_URL+"/request/send/"+status+"/"+userId,{},{withCredentials:true});
      console.log()
      dispatch(removeFeed(userId));

    }catch(err){
      console.log(err.message);
    }
  }
 
    return(
      
        <div className="card bg-base-300 w-96 shadow-sm m-auto my-30">
            
  <figure>
    <img
      src={data.data.photoUrl}
      alt="User photo" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{data.data.firstName+" "+data.data.lastName}</h2>
    <p>{data.data.about}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary" onClick={()=>{
        handleRequest("ignored",data.data._id)
      }}>Ignore</button>
      <button className="btn btn-secondary" onClick={()=>{
        handleRequest("intrested",data.data._id)
      }}>Intrested</button>
    </div>
  </div>
</div>
    )
}
export default FeedCard;