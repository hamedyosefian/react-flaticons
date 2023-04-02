import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const AngleUp = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="m23.71 16.29-8.17-8.17a5 5 0 0 0-7.08 0L.29 16.29a1 1 0 0 0 1.42 1.42l8.17-8.17a3 3 0 0 1 4.24 0l8.17 8.17a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42Z" />
    </svg>
  );
});

AngleUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

AngleUp.displayName = 'AngleUp';

export default AngleUp;
