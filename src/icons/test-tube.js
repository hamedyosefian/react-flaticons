import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const TestTube = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M18 0H6a1 1 0 0 0 0 2h1v17a5 5 0 0 0 10 0V2h1a1 1 0 0 0 0-2zm-6 22a3 3 0 0 1-3-3V9h6v10a3 3 0 0 1-3 3zm3-15H9V2h6z" />
    </svg>
  );
});

TestTube.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TestTube.displayName = 'TestTube';

export default TestTube;
