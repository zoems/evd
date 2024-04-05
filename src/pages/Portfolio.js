import React, { useContext } from 'react';
// import images
// import Image1 from '../img/portfolio/1.png';
// import Image2 from '../img/portfolio/2.png';
// import Image3 from '../img/portfolio/3.png';
// import Image4 from '../img/portfolio/4.png';
import Portfolioheaderimg from '../img/portfolio/Portfolioheader.png';
// import link
import { Link } from 'react-router-dom';
// import motion
import { motion } from 'framer-motion';
// import transition
import { transition1 } from '../transitions';
// import context
import { CursorContext } from '../context/CursorContext';

const Portfolio = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className='section'
    >
      <div className='container mx-auto h-full relative'>
        <div className='flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8'>
          {/* text */}
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-80%' }}
            transition={transition1}
            className='flex flex-col lg:items-start'
          >
            <h1 className='h1'>THE LEGO® GROUP</h1>
            <p className='mb-12 max-w-[600px]'>
              Throughout the two years that I was employed full-time at <strong>
              <a href='https://www.advance.dk/' target='_blank' rel="noreferrer" className=''> Advance creative agency</a></strong> in Copenhagen, Denmark, I spent most of
              my time conceptualizing and writing copy for international LEGO® campaigns.
              <br />
              <br />
              Together with a talented team of art directors and copywriters, I enjoyed
              countless opportunities to let my creative inner child run free,
              while at the same time strengthening my strategic marketing skills by
              pitching, strategizing, and working in tandem with LEGO's teams and
              important stakeholders like Universal Studios and Warner Brothers.
              <br />
              <br />
              Working mostly on campaigns for kids aged 4-12, I particularly loved
              rolling out multifaceted campaigns which serve to entertain, educate,
              engage audiences, and drive more traffic to the LEGO® Group platforms,
              and my passion for combining creativity with strategic thinking was
              particularly appreciated.
            </p>
            <Link to={'/lego'} className='btn mb-[30px] mx-auto lg:mx-0'>
              See samples
            </Link>
          </motion.div>
          {/* image grid */}
          <div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className=''
          >

            <div className='flex-1 max-h-96 lg:max-h-max order-2 overflow-hidden'>
            <img
                className='object-cover h-full lg:h-[450px] hover:scale-110 transition-all duration-500'
                src={Portfolioheaderimg}
                alt=''
              />
            </div>



            {/* image
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img
                className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'
                src={Image1}
                alt=''
              />
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img
                className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'
                src={Image2}
                alt=''
              />
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img
                className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'
                src={Image3}
                alt=''
              />
            </div>
            <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
              <img
                className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'
                src={Image4}
                alt=''
              />
            </div> */}

          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
