import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const TimeDelete = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M23.707 15.293a1 1 0 0 0-1.414 0L19.5 18.086l-2.793-2.793a1 1 0 0 0-1.414 1.414l2.793 2.793-2.793 2.793a1 1 0 1 0 1.414 1.414l2.793-2.793 2.793 2.793a1 1 0 0 0 1.414-1.414L20.914 19.5l2.793-2.793a1 1 0 0 0 0-1.414z" />
      <path d="M12 22a10 10 0 1 1 10-10 1 1 0 0 0 2 0 12 12 0 1 0-12 12 1 1 0 0 0 0-2z" />
      <path d="M12 6a1 1 0 0 0-1 1v4.586l-2.707 2.707a1 1 0 1 0 1.414 1.414l3-3A1 1 0 0 0 13 12V7a1 1 0 0 0-1-1z" />
    </svg>
  );
});

TimeDelete.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TimeDelete.displayName = 'TimeDelete';

export default TimeDelete;
