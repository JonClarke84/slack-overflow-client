import Backdrop from './backdrop'
import { motion } from 'framer-motion'
import { Player } from '@remotion/player'
import { AboutYouVideo } from '../video/AboutYouVideo'

const AboutYou = ({ handleClose, text, currentUser }) => {

  const popIn = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1,
               opacity: 1,
               transition: {
              duration: 0.5, 
              ease: 'easeInOut',
              staggerChildren: 0.1,
            }
              },
    exit: { scale: 0, opacity: 0 },
  }

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
      onClick={(e) => e.stopPropagation()}
      className="modal justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-gray-700"
      variants={popIn}
      initial="hidden"
      animate="visible"
      exit="exit"
      >
    <div>
      <Player
        component={AboutYouVideo}
        durationInFrames={150}
        compositionWidth={360}
        compositionHeight={240}
        fps={30}
        autoPlay
        loop
        controls
        muted
        inputProps={{
          muted: true,
          currentUser: currentUser,
        }}
      />
    </div>
        <button className="text-center text-gray-400 hover:text-purple-600 transition duration-1000"
                onClick={handleClose}
        >
                  Close
        </button>

      </motion.div>
    </Backdrop>
  )
}

export default AboutYou