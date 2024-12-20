/* eslint-disable react/no-unescaped-entities */
import TrashCan from "../assets/TrashCanNoBackground.png";
import { motion } from "motion/react";

export default function Contact() {
  return (
    <>
      <div className="hero bg-secondary" id="contact-us">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <motion.img
            whileHover={{
              rotate: 360,
              transition: { duration: 1 },
            }}
            src={TrashCan}
            className=" lg:md:max-w-sm rounded-full shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold mb-5">
              See what's going on over at our{" "}
              <span
                className="bg-gradient-to-r bg-clip-text  text-transparent 
            from-accent to-black
            animate-text"
              >
                Discord
              </span>
            </h1>
            <a href="https://discord.gg/V2zA7G9ah4">
              <button className="btn btn-primary">Join Us</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
