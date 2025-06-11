import {addRequests} from '../utils/requestSlice'
import {useSelector,useDispatch} from 'react-redux'
import axios from 'axios'
import {useEffect} from 'react'
import {BASE_URL} from '../utils/constants'
import {removeRequest} from '../utils/requestSlice'
const Requests=()=>{
    const requests=useSelector((store)=>store.requests);
    const dispatch=useDispatch();
    const getRequest=async ()=>{
        try{
            const res=await axios.get(BASE_URL+"/user/requests/recieved",{withCredentials:true});
            dispatch(addRequests(res.data.allRequests));
            console.log(res);

        }catch(err){
            console.log(err.message);
        }
    }
    const handleRequest=async (status,requestId)=>{
        try{
            console.log(status);
            console.log(`${BASE_URL}/request/review/${status}/${requestId}`);
            const res=await axios.post(`${BASE_URL}/request/review/${status}/${requestId}`,{},{withCredentials:true});
            console.log(res);
            dispatch(removeRequest(res.data.allRequests[0].toUser));
        }catch(err){
            console.log(err.message);
        }

    }
    useEffect(()=>{
        getRequest();
    },[])
    
        {if(!requests||requests.length===0){
            return <div className="text-center text-3xl text-white">NO CONNECTIONS</div>
        }}
        return(
            <div>
            <div className="text-center text-3xl text-white">Connections</div>
            {console.log(requests)}
            {requests.map((request)=>{
                const {firstName,lastName,about,_id}=request.fromUser;
                return(
                    
                    <div key={_id} className="m-auto my-10 bg-color=300 border-2 rounded-lg w-50 h-20">
                       <h3>{firstName+"  "+lastName}</h3>
                       <p>{about}</p>
                       <div className="mt-2">
                       <button className="btn btn-primary" onClick={()=>{
                        handleRequest("accepted",_id);
                       }}>Accept</button>
                        <button className="btn btn-secondary" onClick={()=>{
                            handleRequest("rejected",_id);
                        }}>Reject</button> 
                        </div> 
    
                        </div>
                        
                   
    
                )
    
            })}
            </div>
        )
    
}
export default Requests