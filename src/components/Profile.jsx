import ProfileForm from './ProfileForm'

import {useSelector} from 'react-redux'
const Profile=()=>{
    const user=useSelector((store)=>store.user);

    return(
        <div >
           {user&&<ProfileForm data={user.data}/>}
          
        </div>
    )
}
export default Profile