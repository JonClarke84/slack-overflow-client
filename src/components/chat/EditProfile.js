import { validateForm } from '../utils/validateForm'

function EditProfile({ currentUser, toggleEditProfileModal, loginFunction, logoutFunction }) {
  const { firstName, lastName, email, icon, displayName, id } = currentUser

  function editProfile(e) {
    e.preventDefault()
    const updatedUser = { firstName: e.target.firstName.value,
                          lastName: e.target.lastName.value,
                          email: e.target.email.value,
                          icon: e.target.icon.value,
                          displayName: e.target.displayName.value,
                          id: id,
                          password: e.target.password.value,
                          confirmPassword: e.target.confirmPassword.value
                        }

    if (validateForm(updatedUser)) {
      toggleEditProfileModal()
  
      fetch(`http://localhost:5000/users/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedUser),
      }).then(response => response.json()
      ).then(() => {
        loginFunction(updatedUser.email, updatedUser.password)
      })
    }
  }

  return(
        <><div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto">
                <div className="relative p-4 flex-auto">
                  <div className="my-4 text-slate-500 text-lg leading-relaxed">
                    <h2 className="text-center bg-gray-700 pt-3">Edit Profile</h2>
                  <form className="bg-gray-700 shadow-md rounded px-8 pt-6 pb-5 mb-4" onSubmit={editProfile}>
      <div className="flex -mx-3">
       <div className="w-1/2 px-3 mb-5">
       <label className="block text-gray-400 text-sm font-bold mb-2 text-left" htmlFor="firstName">
          First Name
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline" 
          type='text'
           name="firstName"
           placeholder={`${firstName}`}
           defaultValue={`${firstName}`}
           autoComplete='First Name' />
        </div>
      

      <div className="w-1/2 px-3 mb-5">
       <label className="block text-gray-400 text-sm font-bold mb-2 text-left" htmlFor="lastName">
          Last Name
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          type='text'
           name="lastName"
           placeholder={`${lastName}`}
            defaultValue={`${lastName}`}
           autoComplete='Last Name' />
      </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-400 text-sm font-bold mb-2 text-left" htmlFor="email">
          Email
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
        type='email'
        name="email"
        placeholder={`${email}`}
        defaultValue={`${email}`}
        autoComplete='email' />
      </div>

     <div className="flex -mx-3">
     <div className="w-1/2 px-3 mb-5">
       <label className="block text-gray-400 text-sm font-bold mb-2 text-left" htmlFor="password">
          Password
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          type='password'
           name="password"
           placeholder='Password'
           autoComplete='password' />
      </div>

      <div className="w-1/2 px-3 mb-5">
       <label className="block text-gray-400 text-sm font-bold mb-2 text-left" htmlFor="confirmPassword">
          Confirm Password
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          type='password'
           name="confirmPassword"
           placeholder='Confirm password'
           autoComplete='password' />
      </div>
      </div>


      <div className="mb-6">
        <label className="block text-gray-400 text-sm font-bold mb-2 text-left" htmlFor="displayName">
          Display Name
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type='text'
          name="displayName"
          placeholder={`${displayName}`}
          defaultValue={`${displayName}`}
          autoComplete='Display Name' />
      </div>

      <div className="mb-6">
        <label className="block text-gray-400 text-sm font-bold mb-2 text-left" htmlFor="icon">
          Icon Url
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
          type='text'
          name="icon"
          placeholder={`${icon}`}
          defaultValue={`${icon}`}
          autoComplete='Icon Url' />
      </div>


       <div className="flex justify-center">
           <ul>
              <li>
         <div className="relative group">
           <div className="edgeGlow"></div>
        <input className="relative bg-gray-600 group-hover:text-white text-gray-500 
                          transition duration-1000 font-bold py-2 px-4 rounded-lg 
                          focus:outline-none focus:shadow-outline cursor-pointer"
          type="submit"
          value="Submit" />
          </div>
              </li>
              <li>
          <button className="text-center text-gray-400 hover:text-purple-600 transition duration-1000 text-xs"
                  onClick={toggleEditProfileModal}>
                  Cancel
          </button>
              </li>
           </ul>
       
       </div>
   </form>
                  </div>
                </div>
                
              </div>
           
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
  )
}

export default EditProfile