import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Play = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="m20.494 7.968-9.54-7A5 5 0 0 0 3 5v14a5 5 0 0 0 7.957 4.031l9.54-7a5 5 0 0 0 0-8.064Zm-1.184 6.45-9.54 7A3 3 0 0 1 5 19V5a2.948 2.948 0 0 1 1.641-2.672A3.018 3.018 0 0 1 8.006 2a2.97 2.97 0 0 1 1.764.589l9.54 7a3 3 0 0 1 0 4.836Z" />
    </svg>
  );
});

Play.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Play.displayName = 'Play';

export default Play;
