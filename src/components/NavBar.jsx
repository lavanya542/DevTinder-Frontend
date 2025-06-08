import {useSelector} from 'react-redux'
const NavBar=()=>{
  const state = useSelector((store) => store); // get full store
  console.log("Redux state in NavBar:", state);

  const user = state.user;
  console.log("user in NavBar:", user);
    return (
        <div className="navbar bg-base-100 shadow-sm">
          {console.log("navbar data"+user)}
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">DevTinder</a>
  </div>
  {user&&(
  <div className="flex gap-2">
    <p>welcome {user.data.firstName}</p>
    
    <div className="dropdown dropdown-end mx-5">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
)}
</div>
    )
}
export default NavBar