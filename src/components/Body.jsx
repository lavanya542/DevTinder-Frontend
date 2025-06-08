import NavBar from './NavBar'
import {Outlet} from 'react-router'
import Footer from './Footer'
import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {addUser} from '../utils/userSlice'
import {BASE_URL} from '../utils/constants'
import axios from 'axios'
const Body=()=>{
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const fetchData=async()=>{
        try{

        
        const res=await axios.get(BASE_URL+"/profile/view",{withCredentials:true});
        
        dispatch(addUser(res.data));
        }
        catch(err){
            if(err.status===401){
                navigate("/login")
            }
            console.log(err);
        }
        
    }
    useEffect(()=>{
        fetchData();
    },[]);
    return(
        <div>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}
export default Body