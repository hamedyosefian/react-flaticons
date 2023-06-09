import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const MugHot = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M19.5 10H19V9a3 3 0 0 0-3-3H4a3 3 0 0 0-3 3v10a5.006 5.006 0 0 0 5 5h8a5.009 5.009 0 0 0 4.9-4 3.6 3.6 0 0 0 4.1-3.5v-3a3.5 3.5 0 0 0-3.5-3.5ZM14 22H6a3 3 0 0 1-3-3V9a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v10a3 3 0 0 1-3 3Zm7-5.5a1.621 1.621 0 0 1-2 1.5v-6a1.621 1.621 0 0 1 2 1.5ZM9 3V1a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0Zm4 0V1a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0ZM5 3V1a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0Z" />
    </svg>
  );
});

MugHot.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MugHot.displayName = 'MugHot';

export default MugHot;
