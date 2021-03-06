import React from 'react';
import PropTypes from 'prop-types';

import { world } from 'assets';
import { github } from 'assets/tech-icons';

const Project = ({ details }) => {
  const { description, img, stack, title, urls } = details;

  return (
    <article className="project">
      <div className="project__image-container">
        <img alt={img.alt} className="project__image" src={img.src} />
      </div>
      <div className="project__details">
        <h3 className="project__title">{title}</h3>
        <p className="project__description">{description}</p>
        <div className="project__stack">
          Tech stack:
          {stack.map(({ alt, src }) => (
            <img
              alt={alt}
              className="project__stack-item"
              key={alt}
              src={src}
            />
          ))}
        </div>
        <a className="project__link" href={urls.repo}>
          <img alt="Github" className="project__link-icon" src={github} />
          Code
        </a>
        <a className="project__link" href={urls.live}>
          <img alt="Github" className="project__link-icon" src={world} />
          Live
        </a>
      </div>
    </article>
  );
};

Project.propTypes = {
  details: PropTypes.shape({
    description: PropTypes.string.isRequired,
    img: PropTypes.shape({
      alt: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    }).isRequired,
    stack: PropTypes.arrayOf(
      PropTypes.shape({
        alt: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired,
      }),
    ).isRequired,
    title: PropTypes.string.isRequired,
    urls: PropTypes.shape({
      live: PropTypes.string.isRequired,
      repo: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Project;
