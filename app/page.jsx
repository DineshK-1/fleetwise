"use client";

import Image from "next/image";
import CabImage from "@/public/CabsPage.png";
import DriversImage from "@/public/DriversPage.png";
import ManagementImage from "@/public/ManagementPage.png";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="landing-frames">
      <div className="cabs-flex container">
        <motion.div className="header" initial={{ opacity: 0, y: -250 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }}>
          <h2>
            Fleet <span>Wise</span>
          </h2>
        </motion.div>
        <motion.div className="deets-one" initial={{ opacity: 0, y: -250 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }}>
          <h4>A WEB-APP FOR MANAGING YOUR</h4>
          <h4>TRANSPORT EMPIRE</h4>
        </motion.div>
        <motion.div className="cabs-flex-image" initial={{ opacity: 0, y: 250 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }}>
          <Image src={CabImage} alt="cabs-image" width={800} height={367} />
        </motion.div>
      </div>
      <div className="drivers-flex container">
        <motion.div className="deets-two" initial={{ opacity: 0, x: -250 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1.5 }}>
          <h4>INFORMATION ON ALL</h4>
          <h4>
            <span>YOUR DRIVERS</span>
          </h4>
        </motion.div>
        <motion.div className="drivers-flex-image" initial={{ opacity: 0, x: 250 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1.5 }}>
          <Image src={DriversImage} alt="drivers-image" width={500} height={450} />
        </motion.div>
      </div>
      <div className="relations-flex container">
        <motion.div className="deets-three" initial={{ opacity: 0, y: 250 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}  transition={{ duration: 1.5 }}>
          <h4>MANAGE YOUR BUSINESS SEAMLESSLY</h4>
          <span>Lorem Ipsum</span>
        </motion.div>
        <motion.div className="relationships-flex-image" initial={{ opacity: 0, y: 250 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}  transition={{ duration: 1.5 }}>
          <Image src={ManagementImage} alt="relationships-image" width={700} height={296} />
        </motion.div>
      </div>
      <div className="git-flex container">
        <div className="git-button">
          DineshK-1
        </div>
        <div className="git-button">
          Mayank Roy
        </div>
      </div>
    </div>
  );
}
