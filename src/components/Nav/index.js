import { debounce } from 'lodash';
import gsap from 'gsap';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import { logo } from 'assets';
import Link from './Link';
import './styles.scss';

const Nav = ({ isNavOpen, sections, setCurrentSection, setIsNavOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      gsap.from('.nav__list-item', {
        x: -150,
        ease: 'power4.out',
        duration: 0.2,
        delay: 0.2,
        opacity: 0,
        stagger: 0.1,
      });
    }
  }, [isOpen]);

  const toggleNav = () => {
    setIsOpen(!isOpen);
    setIsNavOpen(!isNavOpen);
  };

  const handleKeyDown = (e, index) => {
    // Click on enter
    if (e.keyCode === 13) {
      e.preventDefault();
      e.target.click();
    }

    // Close nav when tabbing out or hitting escape key
    if (
      (index === sections.length - 1 && !e.shiftKey && e.keyCode === 9) ||
      e.keyCode === 27
    ) {
      toggleNav();
    }
  };

  const handleSetActive = debounce((name) => {
    setCurrentSection(name);
  }, 100);

  return (
    <nav className="nav">
      <div className="nav__brand">
        <img className="nav__logo" alt="Front end developer" src={logo} />
        <span className="nav__logo-text">Front-End Dev</span>
      </div>

      <button
        aria-controls="navigation"
        aria-expanded={isNavOpen ? 'true' : 'false'}
        aria-haspopup="true"
        aria-label={isNavOpen ? 'Close navigation' : 'Open navigation'}
        className={`nav__burger ${isNavOpen ? 'nav__burger--open' : ''}`}
        onClick={toggleNav}
        type="button"
      >
        <div className="nav__burger-part" />
        <div className="nav__burger-part" />
        <div className="nav__burger-part" />
      </button>
      <ul
        className={`nav__list ${isOpen ? 'nav__list--active' : ''}`}
        id="navigation"
        role="menu"
      >
        {sections.map(({ name, title }, index) => (
          <li key={name} role="none">
            <Link
              handleClick={toggleNav}
              handleKeyDown={(e) => handleKeyDown(e, index)}
              handleSetActive={handleSetActive}
              index={index}
              isNavOpen={isNavOpen}
              name={name}
              title={title}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Nav.propTypes = {
  isNavOpen: PropTypes.bool.isRequired,
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      title: PropTypes.string,
    }),
  ).isRequired,
  setCurrentSection: PropTypes.func.isRequired,
  setIsNavOpen: PropTypes.func.isRequired,
};

export default Nav;
