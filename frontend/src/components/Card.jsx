import React from "react";
import {
  MdAccountCircle,
  MdSupervisorAccount,
  MdAccountTree,
} from "react-icons/md";
import {
  IoMailOutline,
  IoApps,
  IoNotifications,
  IoCard,
  IoPieChart,
  IoChevronForward,
} from "react-icons/io5";
import { IconContext } from "react-icons";
import { motion } from "framer-motion";

const Card = () => {
  return (
    <div className="service_container">
      <div className="title_wrapper">
        <span className="service_title">Four Simple Steps</span>
        <h2>
          Save Time Managing Social Media
          <br /> For Your Trip.
        </h2>
      </div>
      <div className="service_card">
        <motion.div className="card"
          initial={{ y: 800 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <span className="service_icon" style={{ backgroundColor: "#ddfbf9" }}>
            <IconContext.Provider value={{ color: "#14da8f", size: "22px" }}>
              <IoMailOutline />
            </IconContext.Provider>
          </span>
          <h3>Branding <br/>Monetization</h3>
          <a href="#">
              <span>Learn more</span>
                <IconContext.Provider
                  value={{ color: "#14da8f", size: "18px" }}
                >
                  <IoChevronForward />
                </IconContext.Provider>
          </a>
        </motion.div>
        <motion.div className="card"
          initial={{ y: 800 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="service_icon" style={{ backgroundColor: "#e7daf8" }}>
            <IconContext.Provider value={{ color: "#5700cf", size: "22px" }}>
              <IoApps />
            </IconContext.Provider>
          </span>
          <h3>Branding <br/>Monetization</h3>
          <a href="#">
              <span>Learn more</span>
                <IconContext.Provider
                  value={{ color: "#14da8f", size: "18px" }}
                >
                  <IoChevronForward />
                </IconContext.Provider>
          </a>
        </motion.div>
        <motion.div className="card"
          initial={{ y: 800 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <span className="service_icon" style={{ backgroundColor: "#ffede6" }}>
            <IconContext.Provider value={{ color: "#ff8559", size: "22px" }}>
              <IoCard />
            </IconContext.Provider>
          </span>
          <h3>Branding <br/>Monetization</h3>
          <a href="#">
              <span>Learn more</span>
                <IconContext.Provider
                  value={{ color: "#14da8f", size: "18px" }}
                >
                  <IoChevronForward />
                </IconContext.Provider>
          </a>
        </motion.div>
        <motion.div className="card dark"
          initial={{ y: 800 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <span className="service_icon" style={{ backgroundColor: "#fffada" }}>
            <IconContext.Provider value={{ color: "#f1df11", size: "22px" }}>
              <IoPieChart />
            </IconContext.Provider>
          </span>
          <h2>Branding </h2>
          <a href="#">
              <span>Learn more</span>
              <span className="service_icon" style={{ backgroundColor: "#14da8f" }}>
            <IconContext.Provider value={{ color: "#fff", size: "18px" }}>
              <IoChevronForward />
            </IconContext.Provider>
          </span>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Card;
