import React from 'react'

class Login extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render = () => {

    const handleSubmit = (e) => {
      const email = e.target.email.value
      const password = e.target.password.value
      e.preventDefault()
      this.props.loginFunction(email, password)
    }

    const signUp = () => {
      this.props.toggleLogin()
    }
      
      return (
        <div className="flex flex-col justify-center items-center h-screen bg-gray-900">
        <form className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-5 mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <img className="h-20 w-20 mx-auto" src="https://media3.giphy.com/media/3izWMKzrlekRI7BFkd/giphy.gif?cid=790b7611010a6cf13d71373a144a33d1f46592a8b84529b6&rid=giphy.gif&ct=s"/>
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 text-sm font-bold mb-2 text-left" htmlFor="email">
              Email
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            type='text'
            name="email"
            placeholder="email"
            autoComplete='email' />
          </div>
         <div className="mb-6">
           <label className="block text-gray-400 text-sm font-bold mb-2 text-left" htmlFor="password">
              Password
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              type='password'
               name="password"
               placeholder='password'
               autoComplete='password' />
          </div>
           <div className="flex justify-center">
             <div className= "relative group">
               <div className= "edgeGlow"></div>
            <input className="relative bg-gray-700 group-hover:text-white text-gray-500  transition duration-1000 font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline cursor-pointer"
              type="submit"
              value="Login" />
           
           </div>
           </div>
        <div className="mt-5">
          <p className="text-center text-gray-500 text-xs">Don't have an account?</p>
          <button id="signup-btn" className="text-center text-gray-500 hover:text-purple-600 transition duration-1000 text-xs"
                  onClick={signUp}>Sign Up</button>
        </div>
       </form>
    </div>
  )}
}
  
export default Login
