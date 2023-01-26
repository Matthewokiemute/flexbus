import React from 'react';
import bus from '../../../public/Bus.png';
import { IoMailOutline, IoApps, IoNotifications, IoCard, IoPieChart, IoChevronForward, IoChevronForwardCircle, IoStar } from 'react-icons/io5'; 
import { IconContext } from 'react-icons';
import { motion } from 'framer-motion';


const Hero = () => {
  return (
    <section className='content_wrapper'>
      <motion.div className='left_content_wrapper'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <h2>
          <span>Get a <span className='second'>Bus,</span></span>
          <span>for your <span className='second'>journey.</span></span>
        </h2>
        <p>We provide you with safe and secure buses for any movements of your choice, be it a church, school, business, and lots more...</p>
        <div className="btn_group">
            <button className='btn btn_primary'>Book a Bus
             {/* <IconContext.Provider value={{color:"#14da8f", size:"25px"}}>
              <IoChevronForwardCircle style={{ marginLeft:"10px" }} />
             </IconContext.Provider> */}
            </button>
            {/* <button className='btn btn_secondary'>Bus Riding</button> */}
        </div>
        <div className='review_container'>
            <p className="total_review">
                30+ Reviews
            </p>
            <IconContext.Provider value={{color:"#fff", size:"18px"}}>
              <span><IoStar /></span>
              <span><IoStar /></span>
              <span><IoStar /></span>
              <span><IoStar /></span>
              <span><IoStar /></span>
             </IconContext.Provider>
            <p className='more_review'>More than 50+ people making use of our service.</p>
        </div>
      </motion.div>
      <motion.div className='right_content_wrapper'
        initial={{ x: 800 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 30 }}
      >
        <img src={bus} className="hero_img" alt='Main Bus' /> 
      </motion.div>
    </section>
  )
}

export default Hero
