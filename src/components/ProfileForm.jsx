import {useState} from 'react'
import FeedCard from './FeedCard'
import axios from 'axios'
import {BASE_URL} from '../utils/constants' 
import {useDispatch} from 'react-redux'
import {addUser} from '../utils/userSlice'
const ProfileForm=(data)=>{
    const [firstName,setFirstName]=useState(data.data.firstName);
    const [lastName,setLastName]=useState(data.data.lastName);
    const [photoUrl,setPhotoUrl]=useState(data.data.photoUrl);
    const [gender,setGender]=useState(data.data.gender);
    const [about,setAbout]=useState(data.data.about);
    const [error,setError]=useState("");
    const dispatch=useDispatch();


    const saveProfile=async (e)=>{
        try{
            e.preventDefault();

            const res=await axios.patch(BASE_URL+"/profile/edit",{firstName,lastName,photoUrl,gender,about},{withCredentials:true});
            dispatch(addUser(res.user))


        }catch(err){
            console.log(error);
            setError(err.message);
        }
        
    }
    return(
        <div className="flex gap-0">
        <div>
           
            <form>
           <div className="card card-dash bg-base-100 w-96 m-auto mx-30 my-10 ">
  <div className="card-body">
    <h2 className="card-title">Edit Profile</h2>
    <fieldset className="fieldset">
  <legend className="fieldset-legend">FirstName</legend>
  <input type="text" className="input" placeholder={firstName} value={firstName||""} onChange={(e)=>{
    setFirstName(e.target.value)

  }}/>
  
</fieldset>
<fieldset className="fieldset">
  <legend className="fieldset-legend">LastName</legend>
  <input type="text" className="input"  placeholder={lastName} value={lastName||""} onChange={(e)=>{
    setLastName(e.target.value)

  }}/>
  
</fieldset>
<fieldset className="fieldset">
  <legend className="fieldset-legend">Photo</legend>
  <input type="text" className="input"  placeholder={photoUrl} value={photoUrl||""} onChange={(e)=>{
    setPhotoUrl(e.target.value)

  }}/>
  
</fieldset>
<fieldset className="fieldset">
  <legend className="fieldset-legend">Gender</legend>
  <select
    className="select select-bordered w-full"
    value={gender || ""}
    onChange={(e) => setGender(e.target.value)}
  >
    <option value="">-- Select Gender --</option>
    <option value="female">Female</option>
    <option value="male">Male</option>
    <option value="others">Others</option>
  </select>
</fieldset>

<fieldset className="fieldset">
  <legend className="fieldset-legend">About</legend>
  <textarea className="textarea" placeholder={about} value={about||""} onChange={(e)=>{
    setAbout(e.target.value)

  }}></textarea>
  
</fieldset>

    <div className="card-actions justify-end">
      <p className="text-red-500"></p>
      <button className="btn btn-primary" onClick={saveProfile}>Save Changes</button>
    </div>
  </div>
</div>
</form>
        </div>
        <FeedCard data={{firstName,lastName,about,photoUrl,gender}}/>
        </div>
    )
}
export default ProfileForm