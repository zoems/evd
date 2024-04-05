import React, { useContext } from 'react';
// import icons
import {
  // ImFacebook,
  // ImTwitter,
  // ImPinterest,
  ImInstagram,
  ImLinkedin,
} from 'react-icons/im';
// import cursor context
import { CursorContext } from '../context/CursorContext';

const Socials = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      className='hidden xl:flex ml-24'
    >
      <ul className='flex gap-x-4'>
        {/* <li>
          <a href='http://wwww.facebook.com' target='_blank'>
            <ImFacebook />
          </a>
        </li>
        <li>
          <a href='http://www.twitter.com' target='_blank'>
            <ImTwitter />
          </a>
        </li>
        <li>
          <a href='http://www.pinterest.com' target='_blank'>
            <ImPinterest />
          </a>
        </li> */}
        <li>
          <a href='https://www.instagram.com/elizevanderlaan/?hl=en' target='_blank' rel="noreferrer" alt="Instagram">
            <ImInstagram />
          </a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/elize-van-der-laan-97743b148/' target='_blank' rel="noreferrer" alt="LinkedIn">
            <ImLinkedin />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
