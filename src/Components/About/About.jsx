import React from "react";
import { easeOut, motion } from "framer-motion";
import { Link } from "react-router";

const About = () => {
  return (
    <div className="px-6 flex flex-col items-center lg:flex-row">
      <div className="hidden lg:block flex-1">
        <motion.img
          src="https://i.ibb.co.com/ymSp5Fgk/service.jpg"
          animate={{ y: [50, 100, 50] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="max-w-sm w-96 rounded-t-[40px] rounded-br-[40px] rounded-bl-[40px] border-l-2 border-t-2 border-b-2 border-[#FF0019] shadow-2xl"
        />
        <motion.img
          src="https://i.ibb.co.com/5hfrrB65/PONG.jpg"
          animate={{ x: [100, 150, 100] }}
          transition={{ duration: 10, delay: 5, repeat: Infinity }}
          className="max-w-sm w-80 rounded-t-[40px] rounded-br-[40px] rounded-bl-[40px] border-l-2 border-b-2 border-[#FF0019] shadow-2xl"
        />
      </div>
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-5">About RaktoBondhu — RPI</h1>
        <p className="text-lg text-justify mb-10">
          Our platform is an initiative developed by an educational institute
          with the vision of strengthening and organizing the culture of
          voluntary blood donation among students, teachers, and alumni. The
          need for blood can arise at any moment, and during such emergencies,
          finding a reliable donor quickly often becomes challenging. To address
          this, we have created a safe, easy-to-use, and community-driven donor
          network where everyone can support one another during critical times.
        </p>
        <div className="flex gap-5 items-center">
          <Link to={"/about"}>
            <button className="btn px-5 py-1.5 rounded-tr-4xl rounded-br-4xl rounded-bl-4xl bg-[#FF0019] text-white">
              About Us
            </button>
          </Link>
          <Link to={"/contact"}>
            <button className="btn px-5 py-1.5 rounded-tr-4xl rounded-br-4xl rounded-bl-4xl bg-[#FF0019] text-white">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;

<div className=""></div>;
