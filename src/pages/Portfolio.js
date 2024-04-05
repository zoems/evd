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
      <div className='snap-y overflow-scroll container mx-auto h-full relative'>
        {/* lego */}
        <div className='snap-center flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8'>
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
          </div>
        </div>
        {/* advance */}
        <div className='snap-center flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8'>
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
            <h1 className='h1'>Advance Internal Marketing</h1>
            <p className='mb-1 max-w-[600px]'>
              Since going freelance, I have continued working together with Advance
              to produce paid campaigns, conceptualise case videos , create copy
              for all channels, and assist with internal marketing strategies.
              <br />
              <br />
            </p>


          </motion.div>
          {/* image */}
          <div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className=''
          >

            <div className=' max-h-96 lg:max-h-max order-2 overflow-hidden'>
            <h2 className='h2'>Røde Kors case video</h2>
            <p className='mb-1 max-w-[600px]'>
              Case video created to summarize the ‘Courage to Act’ campaign developed
              by Advance together with Røde Kors.
              <br/>
              Role: lead concept and script development
            </p>
            <a href='https://www.linkedin.com/feed/update/urn:li:activity:7120711028899753984' className='btn mb-[30px] mx-auto lg:mx-0'>
              See Video
            </a>

            <h1 className='h1 text-[36px] lg:text-[52px]'>Long Form Copy</h1>

            <h2 className='h2'>3 Recent Projects That Sparked Our Creative Flame</h2>
            <p className='mb-1 max-w-[600px]'>
              *****Article written for Advance's website, showcasing three recent projects******
            </p>
            <a href='https://www.advance.dk/news/3-recent-projects-that-sparked-our-creative-flame/' className='btn mb-[30px] mx-auto lg:mx-0'>
              See Article
            </a>

            <h2 className='h2'>Advancer Spotlight: Morten Olsen</h2>
            <p className='mb-1 max-w-[600px]'>
              *****Article written for Advance's website, showcasing one of our talented team members*****
            </p>
            <a href='https://www.advance.dk/news/advancer-spotlight-morten-olsen/' className='btn mb-[30px] mx-auto lg:mx-0'>
              See Article
            </a>

            <h2 className='h2'>Here’s How We Helped Danes Reflect On All The Things They Can Thank Their Brains For</h2>
            <p className='mb-1 max-w-[600px]'>
              *****Article written for Advance's website, showcasing one of our talented team members*****
            </p>
            <a href='https://www.advance.dk/news/here-s-how-we-helped-danes-reflect-on-all-the-things-they-can-thank-their-brains-for/' className='btn mb-[30px] mx-auto lg:mx-0'>
              See Article
            </a>
            </div>
          </div>
        </div>

        {/* Bar Belly */}
        <div className='snap-center flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8'>
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
            <h1 className='h1'>Bar Belly</h1>
            <p className='mb-12 max-w-[600px]'>
              Earlier this year, I teamed up with bar and restaurant owner Tommy Mendes
              in New York to give Bar Belly, an iconic watering hole in the Lower East Side,
              a full menu revamp. From coming up with cocktail descriptions to revisiting the
              food and wine menu, I enjoyed taking the lead in a project that combines two of
              my greatest passions: writing and the culinary scene.
              <br />
              Check out the new menu.
              </p>
            <a href='https://www.advance.dk/' target='_blank' rel="noreferrer"  className='btn mb-[30px] mx-auto lg:mx-0'>
              Here
            </a>
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
          </div>
        </div>

        {/* Carlotta*/}
        <div className='snap-center flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8'>
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
            <h1 className='h1'>Carlota</h1>
            <p className='mb-12 max-w-[600px]'>
              After having finished the menu for Bar Belly, Tommy offered me the
              opportunity to give my input for his newest restaurant, Carlota.
              A Spanish tapas restaurant located right by Dime Square, I’ve loved
              creating a concept that merges traditional Spanish cultures with the
              no-frills bustle of New York City. As the dishes rotate with the
              seasons, Tommy and I continue to collaborate on both Carlota and Bar
              Belly’s menus.
              <br />
              Check out the new menu.
              </p>
            <a href='https://www.advance.dk/' target='_blank' rel="noreferrer"  className='btn mb-[30px] mx-auto lg:mx-0'>
              Here
            </a>
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
          </div>
        </div>


      </div>
    </motion.section>
  );
};

export default Portfolio;

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
