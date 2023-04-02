import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const AngleSmallRight = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="m15.4 9.88-4.59-4.59a1 1 0 0 0-1.41 0 1 1 0 0 0 0 1.42l4.6 4.58a1 1 0 0 1 0 1.42l-4.6 4.58a1 1 0 0 0 1.41 1.42l4.59-4.59a3 3 0 0 0 0-4.24Z" />
    </svg>
  );
});

AngleSmallRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

AngleSmallRight.displayName = 'AngleSmallRight';

export default AngleSmallRight;
