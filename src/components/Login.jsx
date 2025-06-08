import {useState} from 'react'
import axios from 'axios'
import {useDispatch}  from 'react-redux';
import {addUser} from '../utils/userSlice'
import {useNavigate} from 'react-router-dom'
import {BASE_URL} from '../utils/constants'
const Login=()=>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const getData=async (e)=>{
        
        e.preventDefault();//it will prevent the page from reloading
        try {
            const response = await axios.post(BASE_URL+"/login", {
              email,
              password,
            },{withCredentials:true});
            console.log('Submitted:', email, password);
            console.log('Response:', response);
            dispatch(addUser(response.data));
            navigate('/')
          } catch (error) {
            console.error('Login failed:', error);
          }
        };

    
    return (
        <div>
            <form  onSubmit={getData}>
           <div className="card card-dash bg-base-100 w-96 my-10 mx-100">
  <div className="card-body">
    <h2 className="card-title">Login</h2>
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
      <button className="btn btn-primary" >login</button>
    </div>
  </div>
</div>
</form>
        </div>
    )
}
export default Login