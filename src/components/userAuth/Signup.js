import React from 'react'
import { validateForm } from '../utils/validateForm'

function Signup(props) {

  const handleSubmit = (e) => {
    e.preventDefault()
    const email = e.target.elements.email.value
    const password = e.target.elements.password.value
    const confirmPassword = e.target.elements.confirmPassword.value
    const firstName = e.target.elements.firstName.value
    const lastName = e.target.elements.lastName.value
    const displayName = e.target.elements.displayName.value
    const icon = e.target.elements.icon.value
    const formData = { email, password, confirmPassword, firstName, lastName, displayName, icon }

    const isValid = validateForm(formData)

    if (isValid) {
      const newUser = {
        firstName: e.target.firstName.value,
        lastName: e.target.lastName.value,
        email: e.target.email.value,
        password: e.target.password.value,
        icon: e.target.icon.value,
        displayName: e.target.displayName.value
      }
    props.signUpFunction(newUser)
    } else {
      return
    }
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-900">
    <form className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-5 mb-4" onSubmit={handleSubmit}>
      <div className="flex -mx-3">
       <div className="w-1/2 px-3 mb-5">
       <label className="block text-gray-400 text-sm font-bold mb-2 text-left" htmlFor="firstName">
          First Name
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline" 
          type='text'
           name="firstName"
           placeholder='First Name'
           autoComplete='First Name' />
        </div>
      

      <div class="w-1/2 px-3 mb-5">
       <label className="block text-gray-400 text-sm font-bold mb-2 text-left" htmlFor="lastName">
          Last Name
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          type='text'
           name="lastName"
           placeholder='Last Name'
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
        placeholder="Email"
        autoComplete='email' />
      </div>

     <div className="flex -mx-3">
     <div class="w-1/2 px-3 mb-5">
       <label className="block text-gray-400 text-sm font-bold mb-2 text-left" htmlFor="password">
          Password
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
          type='password'
           name="password"
           placeholder='Password'
           autoComplete='password' />
      </div>

      <div class="w-1/2 px-3 mb-5">
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
          placeholder='Display Name'
          autoComplete='Display Name' />
      </div>

      <div className="mb-6">
        <label className="block text-gray-400 text-sm font-bold mb-2 text-left" htmlFor="icon">
          Icon Url
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline"
          type='text'
          name="icon"
          placeholder='Icon Url'
          autoComplete='Icon Url' />
      </div>


       <div className="flex justify-center">
         <div className="relative group">
           <div className="edgeGlow"></div>
        <input className="relative bg-gray-600 group-hover:text-white text-gray-500 
                          transition duration-1000 font-bold py-2 px-4 rounded-lg 
                          focus:outline-none focus:shadow-outline cursor-pointer"
          type="submit"
          value="Sign Up" />
       </div>
       </div>
   </form>
</div>
  )
}

export default Signup
