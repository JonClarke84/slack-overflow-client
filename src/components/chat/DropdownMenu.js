function DropdownMenu({ currentUser, logoutFunction, animationClass, toggleEditProfileModal }) {

  const { firstName, lastName, email, icon, displayName } = currentUser

  return(
    <div className={`${animationClass}`}>
    <div className="bannerDropdownList">
         <ul>
           <li className="text-xs font-bold pt-1 pb-1 text-gray-900 bg-gray-700">
             {email}
           </li>
           <li className="text-xs pt-1 pb-1 text-gray-900 bg-gray-700">
             {firstName} {lastName}
           </li>
           <li className='bannerProfile'>
             {<button name="edit" onClick={toggleEditProfileModal}>Edit Profile</button>}
           </li>
           <li className='bannerProfile'>
             {<button name="logout" onClick={logoutFunction}>Logout</button>}
           </li>
         </ul>
       </div>
    </div>
  )
}

export default DropdownMenu