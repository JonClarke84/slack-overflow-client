import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import DropdownMenu from './DropdownMenu'
import EditProfile from './EditProfile'
import AboutYou from './about-you'

function Banner({ currentUser, logoutFunction, loginFunction, currentRoom }) {
  const [showDropdown, setShowDropdown] = useState(false)
  const [showEditProfileModal, setShowEditProfileModal] = useState(false)
  const [showAboutYou, setShowAboutYou] = useState(false)
  const [animationClass, setAnimationClass] = useState("banner_dropdownhidden")

  const { firstName, lastName, email, icon, displayName } = currentUser
  
  const toggleDropdown = () => { setShowDropdown(value => !value)
                                  if(!showDropdown) {
                                    setAnimationClass("banner_dropdown")
                                  } else {
                                    setAnimationClass("banner_dropdownreverse")
                                  } }

  const dropdownProps = { logoutFunction, currentUser, animationClass, toggleEditProfileModal, toggleAboutYouModal }

  function toggleEditProfileModal() {
    if (showDropdown) {
      toggleDropdown()
    }
    setShowEditProfileModal(value => !value)
  }

  function toggleAboutYouModal() {
    if (showDropdown) {
      toggleDropdown()
    }
    setShowAboutYou(value => !value)
  }

  return (
    <div className='Banner'>
      <div className="bannerRoom">
        <h1># { currentRoom }</h1>
      </div>
       <div>
        <button type="button" className='bannerProfile' onClick={toggleDropdown}>
          <img className="w-6 h-6 mr-2 rounded-full shadow-lq" src={icon}/>
          {displayName}
        </button>
      <DropdownMenu {...dropdownProps}/>
      </div>
      {showEditProfileModal ? <EditProfile currentUser = {currentUser}
                                            toggleEditProfileModal={toggleEditProfileModal}
                                            loginFunction={loginFunction}
                                            logoutFunction={logoutFunction}
                                            /> : null}
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
        >
      {showAboutYou && <AboutYou handleClose={toggleAboutYouModal}/>}
      </AnimatePresence>
    </div>
  )
}

export default Banner
