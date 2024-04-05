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

const Coloplast = () => {
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
            className='flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col gap-10 justify-center items-center lg:items-start mb-12'
          >
            <div>
              <h1 className='h1 text-[36px] lg:text-[72px]'>Coloplast</h1>
              <p className='max-w-l'>
                Being part of the Coloplast team at Advance allowed me to practice effective
                communication in an industry with strict marketing parameters. I particularly
                enjoyed learning how powerful effective communication can be when addressing
                vulnerable audiences: often, taking an emotional approach and putting the
                user in center focus is key.
                <br/>
                I’ve picked two campaigns to give an indication of what type of work I completed for this client.
              </p>
            </div>

            {/* “Your training partner” */}
            <div>
              <h1 className='h2'>“Your training partner”</h1>
              <h2 className='h2'>Date: Winter 2022/Spring 2023</h2>
              <h2 className='h2'>Role: Lead concept/copy</h2>
              <p>
                Intermittent catheterisation is the preferred method when it comes to
                maintaining good bladder health, but many females struggle to self-manage
                IC because they are unable to visualize the urethra and feel intimidated
                by catheter use. That’s why Coloplast developed a digital guide featuring
                a catheter holder with camera—a support tool to help female users visualize
                the urethra and learn to self-manage IC from the start.
                <br/>
                We developed a launch concept that addresses the digital guide as
                “your training partner”. Taking this as our platform line, we executed
                a full toolbox for global markets including icons, key visuals and packshots,
                product fact sheets, sales call teasers, roll-ups, step-by-step guides,
                a one-pager for healthcare professionals, and a full showpad experience.
                <br/>
                The backbone of this campaign was a series of four testimonial interviews—two
                with healthcare professionals, and two with female IC users—which we carried
                out in Windsor, UK and Paris, France.
                <br/>
                As lead copywriter and concept developer,
                I played a central role in developing a creative approach to the brief,
                collaborating actively with Coloplast teams, determining the name for the
                digital guide, conducting (pre)interviews for the testimonials, preparing
                for (and participating during) all shoots, writing scripts, and developing
                supporting copy for all assets.
              </p>
            </div>

            {/* discretion */}
            <div>
              <h1 className='h2'>“Discretion”</h1>
              <h2 className='h2'>Date: Spring 2023</h2>
              <h2 className='h2'>Role: Lead copywriter/concept development</h2>
              <p>
                When Coloplast approached us to help them with a social-first campaign to
                highlight the discreetness of their ostomy care range, we offered users
                a glimpse of what life can be like when they don’t have to constantly be on
                high alert for unwanted visibility, smells, and noise.
                <br/>
                We pixelated the peristomal area on user images and then resolved it in high
                definition to give a visual representation that, with SenSura® Mio, users can
                fully show who they are without inhibition, because there is nothing to see, hear, or smell.
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

export default Coloplast
