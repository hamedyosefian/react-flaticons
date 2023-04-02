import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Mars = forwardRef(({ color, size, ...rest }, ref) => {
  const iconContext = useContext(IconContext);

  const mergedProps = {
    color: color ?? iconContext.color ?? 'currentColor',
    size: size ?? iconContext.size ?? '20px',
    ...rest,
  };
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={mergedProps.size}
      height={mergedProps.size}
      viewBox="0 0 24 24"
      fill={mergedProps.color}
      {...mergedProps}
    >
      <path d="M448.249 0h-106.25c-11.736 0-21.25 9.53-21.25 21.285s9.514 21.285 21.25 21.285h97.453L294.271 187.991c-78.572-62.08-192.511-48.605-254.488 30.097S-8.742 410.916 69.83 472.996s192.511 48.605 254.488-30.097c51.91-65.917 51.91-158.893 0-224.81L469.5 72.668v97.614c0 11.756 9.514 21.285 21.25 21.285s21.25-9.53 21.25-21.285V63.856C512 28.589 483.458 0 448.249 0zM182.622 468.275c-76.285 0-138.126-61.943-138.126-138.354s61.841-138.354 138.126-138.354 138.126 61.943 138.126 138.354c-.093 76.372-61.88 138.26-138.126 138.354z" />
    </svg>
  );
});

Mars.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Mars.displayName = 'Mars';

export default Mars;
