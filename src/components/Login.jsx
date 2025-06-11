import {useState} from 'react'
import axios from 'axios'
import {useDispatch}  from 'react-redux';
import {addUser} from '../utils/userSlice'
import {useNavigate} from 'react-router-dom'
import {BASE_URL} from '../utils/constants'
const Login=()=>{
    const [email,setEmail]=useState("lavanya542@gmail.com");
    const [password,setPassword]=useState("Lavanya542@");
    const [error,setError] =useState("");
    const [isSignup,setIsSignup]=useState(false);
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const dispatch=useDispatch();
    const navigate=useNavigate();
   

    const getData=async (e)=>{
        
        e.preventDefault();//it will prevent the page from reloading
        try {
            const response = isSignup?await axios.post(BASE_URL+"/signup",{
              firstName,
              lastName,
              email,
              password,
            },{withCredentials:true}):
            await axios.post(BASE_URL+"/login", {
              email,
              password,
            },{withCredentials:true});
            console.log("form submitted"+response.data.data);
           
            dispatch(addUser(response.data));
            navigate('/')
          } catch (err) {
            console.error('Login failed:', error);
            setError(err?.response?.data||"something went wrong");
          }
        };

    
    return (
      <>
        <div>
            <form  onSubmit={getData}>
           <div className="card card-dash bg-base-100 w-96 my-10 mx-100">
  <div className="card-body">
   {isSignup?
        <><h2 className="card-title">Signup</h2>
        <fieldset className="fieldset">
  <legend className="fieldset-legend">FirstName</legend>
  <input type="text" className="input" onChange={(e)=>{
    setFirstName(e.target.value);
    
  }} />
  
</fieldset>
<fieldset className="fieldset">
  <legend className="fieldset-legend">LastName</legend>
  <input type="text" className="input" onChange={(e)=>{
    setLastName(e.target.value);
    
  }} />
  
</fieldset></>:<h2>Login</h2>
    
  }
    <fieldset className="fieldset">
  <legend className="fieldset-legend">Email</legend>
  <input type="text" className="input" onChange={(e)=>{
    setEmail(e.target.value);
    
  }} />
  
</fieldset>
<fieldset className="fieldset">
  <legend className="fieldset-legend">Password</legend>
  <input type="password" className="input"  onChange={(e)=>{
    setPassword(e.target.value);
    
  }}/>
  
</fieldset>
    <div className="card-actions justify-end">
      <p className="text-red-500">{error}</p>
      {isSignup?<button className="btn btn-primary" >Signup</button>:<button className="btn btn-primary" >Login</button>}
      {isSignup?<p className="cursor:pointer" onClick={()=>setIsSignup(false)}>Already have account|Login</p>:<p className="cursor:pointer" onClick={()=>setIsSignup(true)}>Create account|Signup</p>}
    </div>
  </div>
</div>
</form>
        </div>
        </>
    )
}
export default Login