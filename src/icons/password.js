import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Password = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M15 17a1 1 0 0 1-1 1h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 1 1zm-.293-9.707a1 1 0 0 0-1.414 0L12 8.586l-1.293-1.293a1 1 0 1 0-1.414 1.414L10.586 10l-1.293 1.293a1 1 0 1 0 1.414 1.414L12 11.414l1.293 1.293a1 1 0 0 0 1.414-1.414L13.414 10l1.293-1.293a1 1 0 0 0 0-1.414zM22 16h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2zm-.586-6 1.293-1.293a1 1 0 1 0-1.414-1.414L20 8.586l-1.293-1.293a1 1 0 1 0-1.414 1.414L18.586 10l-1.293 1.293a1 1 0 1 0 1.414 1.414L20 11.414l1.293 1.293a1 1 0 0 0 1.414-1.414zM6 16H2a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2zm.707-8.707a1 1 0 0 0-1.414 0L4 8.586 2.707 7.293a1 1 0 1 0-1.414 1.414L2.586 10l-1.293 1.293a1 1 0 1 0 1.414 1.414L4 11.414l1.293 1.293a1 1 0 1 0 1.414-1.414L5.414 10l1.293-1.293a1 1 0 0 0 0-1.414z" />
    </svg>
  );
});

Password.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Password.displayName = 'Password';

export default Password;
