import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Volleyball = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M256.07-.047C114.467-.047-.326 114.746-.326 256.349S114.467 512.744 256.07 512.744s256.395-114.792 256.395-256.395S397.673-.047 256.07-.047zM466.667 224v.064a213.087 213.087 0 0 1-62.677 26.261 388.272 388.272 0 0 0-65.472-191.019C406.956 88.198 455.48 150.56 466.667 224zM256 42.667c5.397 0 10.667.405 15.979.811a346.174 346.174 0 0 1 89.6 212.245 212.675 212.675 0 0 1-85.333-14.72 256.663 256.663 0 0 0-94.912-184.555A211.637 211.637 0 0 1 256 42.667zm-117.611 35.52a213.73 213.73 0 0 1 52.373 48.341A389.399 389.399 0 0 0 47.659 301.461c-18.991-86.039 17.107-174.87 90.73-223.274zM71.595 362.773A346.896 346.896 0 0 1 212.822 163.2a212.361 212.361 0 0 1 21.184 83.008 256.706 256.706 0 0 0-100.587 184.107 214.537 214.537 0 0 1-61.824-67.542zM256 469.333a212.222 212.222 0 0 1-80.469-15.872 212.958 212.958 0 0 1 14.336-80.533 381.867 381.867 0 0 0 223.467 26.645A212.547 212.547 0 0 1 256 469.333zM209.067 334.72a212.492 212.492 0 0 1 50.539-54.4 255.407 255.407 0 0 0 94.891 18.624 257.504 257.504 0 0 0 114.091-26.667 211.324 211.324 0 0 1-20.117 75.136 346.795 346.795 0 0 1-239.404-12.693z" />
    </svg>
  );
});

Volleyball.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Volleyball.displayName = 'Volleyball';

export default Volleyball;
