import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const TrainSide = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M19.99 15H1a1 1 0 0 0 0 2h18.99a4 4 0 0 0 3.825-5.193A13.939 13.939 0 0 0 10.455 2H1a1 1 0 0 0 0 2h3v3H1a1 1 0 0 0 0 2h19.213a12.048 12.048 0 0 1 1.694 3.406 1.969 1.969 0 0 1-.3 1.773A1.992 1.992 0 0 1 19.99 15ZM9 7H6V4h3Zm2 0V4.022A11.952 11.952 0 0 1 18.407 7ZM23 20H1a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2Z" />
    </svg>
  );
});

TrainSide.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TrainSide.displayName = 'TrainSide';

export default TrainSide;
