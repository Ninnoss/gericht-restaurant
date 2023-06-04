import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

import { images } from '../../constants/index';
import './Navbar.css';
import { useState } from 'react';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img
          src={images.gericht}
          alt="App logo"
        />
      </div>

      <ul className="navbar__links">
        <li className="p__opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p__opensans">
          <a href="#about">about</a>
        </li>
        <li className="p__opensans">
          <a href="#menu">menu</a>
        </li>
        <li className="p__opensans">
          <a href="#awards">awards</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">contact</a>
        </li>
      </ul>

      <div className="navbar__login">
        <a
          href="#login"
          className="p__opensans">
          Log In / Register
        </a>

        <div />

        <a
          href="/"
          className="p__opensans">
          Book Table
        </a>
      </div>

      <div className="navbar__smallscreen">
        <GiHamburgerMenu
          color="#FFF"
          size={'1.4rem'}
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu && (
          <div className="navbar__smallscreen-overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              size={'2rem'}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />

            <ul className="navbar__smallscreen_links">
              <li className="p__opensans">
                <a href="#home">Home</a>
              </li>
              <li className="p__opensans">
                <a href="#about">about</a>
              </li>
              <li className="p__opensans">
                <a href="#menu">menu</a>
              </li>
              <li className="p__opensans">
                <a href="#awards">awards</a>
              </li>
              <li className="p__opensans">
                <a href="#contact">contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
