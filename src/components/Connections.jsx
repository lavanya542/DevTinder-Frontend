import axios from 'axios'
import {useDispatch} from 'react-redux'
import {useEffect} from 'react'
import {useSelector } from 'react-redux'
import {addConnection} from '../utils/connectionsSlice'
import {BASE_URL} from '../utils/constants'
const Connections=()=>{
    const dispatch=useDispatch();
    const connections=useSelector((store)=>store.connections)
    const getConnections=async ()=>{
        try{
            const res=await axios.get(BASE_URL+"/user/connections",{withCredentials:true});
        dispatch(addConnection(res.data));
        console.log(res);

        }catch(err){
            console.log(err.message);
        }
        
    }
    useEffect(()=>{
        getConnections();
    },[])
   
    if(!connections||connections.length===0){
        return <div className="text-center text-3xl text-white">NO CONNECTIONS</div>
    }
    return(
        <div>
        <div className="text-center text-3xl text-white">Connections</div>
        {connections.map((connection)=>{
            const {firstName,lastName,about,_id}=connection;
            return(
                <div key={_id} className="m-auto my-10 bg-color=300 border-2 rounded-lg w-50 h-15">
                   <h3>{firstName+"  "+lastName}</h3>
                   <p>{about}</p>

                    </div>

            )

        })}
        </div>
    )
}
export default Connections;