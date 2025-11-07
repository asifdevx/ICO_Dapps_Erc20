import React from 'react';
import { RiCheckboxCircleFill } from 'react-icons/ri';
import AnimatedBubbleParticles from '../ui/Animated-buble';
import Button from '../ui/Button';
import { motion } from 'framer-motion';

const Hero = () => {
  console.count('hero');
  return (
    <section className="w-screen min-h-screen">
            <motion.div
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <motion.div
          className="absolute w-[500px] h-[500px] bg-purple-500 rounded-full filter blur-3xl opacity-30"
          style={{ top: "10%", left: "5%" }}
          animate={{ x: [0, 100, -50, 0], y: [0, 50, -30, 0] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "loop" }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] bg-pink-500 rounded-full filter blur-3xl opacity-25"
          style={{ top: "50%", left: "60%" }}
          animate={{ x: [0, -80, 60, 0], y: [0, -40, 70, 0] }}
          transition={{ duration: 25, repeat: Infinity, repeatType: "loop" }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] bg-indigo-500 rounded-full filter blur-2xl opacity-20"
          style={{ top: "70%", left: "20%" }}
          animate={{ x: [0, 60, -40, 0], y: [0, 30, -50, 0] }}
          transition={{ duration: 30, repeat: Infinity, repeatType: "loop" }}
        />
      </motion.div>
      {/* container  */}
      <AnimatedBubbleParticles
        maxBubbles={20}
        className="w-full min-h-screen h-full flex flex-col md:flex-row items-center justify-center md:justify-between section_padding"
      >
        {/* left side of the hero section  */}
        <aside className="flex flex-col items-center md:items-start gap-5 md:space-y-1 w-full md:w-1/2">
          <div className="premium_Btn">
            <p className="font_gradient text-xs font-semibold tracking-wide">PreSale Now Live</p>
          </div>
          <h4 className=" text-5xl font-extrabold font_gradient ">SPECTUM</h4>
          <h5 className="font-extrabold text-26  font_gradient ">
            Token Sale <span className="text-black dark:text-white"> Stage 1</span>
          </h5>
          <p className="text-gray-800 dark:text-gray-200">
            {' '}
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit vel voluptas sit
            voluptatum rem tenetur totam reiciendis nisi inventore dolore. Nam reprehenderit quasi
            aut corporis natus recusandae a necessitatibus ipsum?
          </p>
          <div className="flex items-center gap-3">
            <Button
              title={
                <div className="flex items-center gap-1 ">
                  <RiCheckboxCircleFill className="text-purple-800" />
                  <p className="font_gradient text-14">Limited PreSale</p>
                </div>
              }
              othercss="bg-purple-100  dark:bg-white/10  hover:bg-purple-200  dark:hover:bg-white/20 transition-colors duration-300  backdrop-blur-md"
            />
            <Button
              title={
                <div className="flex items-center gap-1 ">
                  <RiCheckboxCircleFill className=" " />
                  <p>Limited PreSale</p>
                </div>
              }
              othercss="premium_Btn"
            />
          </div>
        </aside>
      </AnimatedBubbleParticles>
    </section>
  );
};

export default Hero;
