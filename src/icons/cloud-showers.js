import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const CloudShowers = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M14 24a1 1 0 0 1-1-1v-5a1 1 0 0 1 2 0v5a1 1 0 0 1-1 1Zm-8 0a1 1 0 0 1-1-1v-5a1 1 0 0 1 2 0v5a1 1 0 0 1-1 1Zm12-2a1 1 0 0 1-1-1v-5a1 1 0 0 1 2 0v5a1 1 0 0 1-1 1Zm-8 0a1 1 0 0 1-1-1v-5a1 1 0 0 1 2 0v5a1 1 0 0 1-1 1Zm-8-3.672a1 1 0 0 1-.777-.371A5.532 5.532 0 0 1 1.8 10.43a1 1 0 0 0 .345-.9 8.147 8.147 0 0 1-.033-2.889A7.945 7.945 0 0 1 8.5.138a8.052 8.052 0 0 1 8.734 4.438 1.039 1.039 0 0 0 .743.57A7.55 7.55 0 0 1 22.846 16.5a1 1 0 0 1-1.692-1.068 5.537 5.537 0 0 0-3.571-8.325 3.009 3.009 0 0 1-2.158-1.672A6 6 0 0 0 4.086 6.967a6.136 6.136 0 0 0 .024 2.18 3 3 0 0 1-.964 2.763 3.518 3.518 0 0 0-.369 4.79A1 1 0 0 1 2 18.328Z" />
    </svg>
  );
});

CloudShowers.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CloudShowers.displayName = 'CloudShowers';

export default CloudShowers;
