import React, { useContext } from 'react';
// import images
import WomanImg from '../img/about/woman.png';
// import link
import { Link } from 'react-router-dom';
// import motion
import { motion } from 'framer-motion';
// import transition
import { transition1 } from '../transitions';
// import cursor context
import { CursorContext } from '../context/CursorContext';

const About = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className='section'
    >
      <div
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className='container mx-auto h-full relative'
      >
        {/* text & img wrapper */}
        <div className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16'>
          {/* image */}
          <div className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden'>
            <img src={WomanImg} alt='' />
          </div>
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-80%' }}
            transition={transition1}
            className='flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'
          >
            <h1 className='h1'>About me</h1>
            <p className='mb-12 max-w-l'>
              Hi! I'm Elize, a Dutch/American creative currently based in Berlin.
              <br /><br />
              My main skills are copywriting and concept development: from freelance to full-time,
              for clients that range from lifestyle to legal consultancies to MedTech and even the
              creators of tiny, colorful bricks (yes, the LEGO® Group!), I've enjoyed getting to hone
              my skills for numerous, varied projects throughout the 7+ years that I have been working
              in the industry.
              <br /><br />
              Whether it's writing long-form articles, conjuring up creative concepts
              for TVCs and social media campaigns, or helping businesses develop stand-out brand narratives,
              I combine creativity with strategy and a keen eye for detail every step of the way, for each
              project I take on.
              <br /><br />
              Besides my love for putting pen to paper, I'm passionate about specialty coffee,
              the culinary scene, music, vintage, and discovering museums and public libraries in all corners
              of the world.

              <br /><br />
              Always happy to make new connections - feel free to reach out!
            </p>
            <Link to={'/portfolio'} className='btn'>
              View my work
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
