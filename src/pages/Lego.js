import React, { useContext } from 'react';
// import images
// import WomanImg from '../img/about/woman.png';
// import link
import { Link } from 'react-router-dom';
// import motion
import { motion } from 'framer-motion';
// import transition
import { transition1 } from '../transitions';
// import cursor context
import { CursorContext } from '../context/CursorContext';

const Lego = () => {
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
        className='container mx-auto max-h-full lg:pt-16 overflow-scroll relative'
      >
        {/* text & img wrapper */}
        <div className='flex flex-col items-center justify-center px-24 text-center lg:text-left lg:pt-16'>
          {/* image
          <div className='flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden'>
            <img src={WomanImg} alt='' />
          </div> */}
          {/* text */}
          <motion.div
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-80%' }}
            transition={transition1}
            className='flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col gap-10 justify-center items-center lg:items-start'
          >
            <div>
              <h1 className='h1 text-[36px] lg:text-[72px]'>Samples of my work</h1>
              <p className='mb-12 max-w-l'>
                Here's samples of several campaigns for the LEGO® Group
                that I worked on together with my team at Advance.
                Most of the work is password protected, so if I haven't
                provided you with one yet, please reach out and I'll
                send it over as soon as possible.
              </p>
            </div>
            <div>
              <h2 className='h2'>Mechasaurs and LEGO® Marvel</h2>
              <p>
                Activation created in close collaboration with the LEGO® Group
                and Marvel Studios. Shared on LEGO's private platforms
                (website, app, and YouTube), including additional activations to
                drive engagement. Role: lead copywriter/concept development.
              </p>
              <br />
              <br />

              <iframe title='1' width="560" height="315" src="https://www.youtube.com/watch?v=N0Daq1eaF8o&ab_channel=MarvelHQ" frameborder="0" allowfullscreen></iframe>
            </div>
            <div>
              <h2 className='h2'>LEGO® Harry Potter</h2>
              <p>LEGO® Harry Potter 'common room' videos created in close collaboration
                with the LEGO® Group and Warner Brothers. Shared on LEGO's private platforms
                (website, app, and YouTube) including additional activations to drive engagement. Role: lead copywriter/concept development.</p>
            </div>
            <div>
              <h2 className='h2'>LEGO® Gabby's Dollhouse</h2>
              <p>Full campaign developed for the launch of new LEGO® 'Gabby's Dollhouse'
                theme (based on the popular Netflix series).
                Role: lead copywriter/concept development for 60-second video,
                as well as 3 shorter supporting videos, SoMe activations and toolbox
                elements. Created in close collaboration with LEGO® Group and DreamWorks.
              </p>
            </div>
            <div>
              <h2 className='h2'>LEGO® Caring for Animals</h2>
              <p>
              Two video concepts developed to create product awareness,
              build engagement for kids 6+, and bring to life important LEGO® Friends
              themes such as friendship,
              inclusivity & kindness/support. Role: co-creative/concept development.
              </p>
            </div>
            <div>
              <h2 className='h2'>LEGO® Passion Interviews</h2>
              <p>
              Set of videos created for the LEGO® Group with the theme of encouraging
              kids to follow their passions, including the development of supporting
              activations (polls, activities, questions and more) to drive engagement on
              LEGO's private channels.
              Role: supporting copywriter, interviewer, and motion capture animation.
              </p>
            </div>
            <div>
              <h2 className='h2'>LEGO® Safer Internet Day</h2>
              <p>
                Series of videos developed to promote internet safety awareness in lieu of
                Safer Internet Day. Includes the development of supporting activations
                (polls, activities, questions and more) to drive engagement on LEGO's
                private channels. Role: supporting copywriter and voice actor.
              </p>
            </div>


            {/* <Link to={'/portfolio'} className='btn'>
              View my work
            </Link> */}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Lego
