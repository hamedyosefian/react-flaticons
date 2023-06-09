import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Ball = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M20.5 17a3.5 3.5 0 1 0 3.5 3.5 3.5 3.5 0 0 0-3.5-3.5Zm0 5a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5Zm3.447-19.562a3 3 0 0 0-5.435-1.114L7.785 17.539a.96.96 0 1 1-1.635-1.007 3 3 0 1 0-5.108-3.147A6.959 6.959 0 0 0 6.949 24a7.045 7.045 0 0 0 1.626-.191 6.886 6.886 0 0 0 4.3-3.091l10.61-16.037a2.987 2.987 0 0 0 .462-2.243Zm-12.757 17.2a4.96 4.96 0 0 1-8.446-5.2 1 1 0 1 1 1.7 1.049 2.96 2.96 0 0 0 5.026 3.129l4.779-7.223 1.667 1.1ZM21.827 3.562l-.007.011-4.8 7.255-1.667-1.1 4.821-7.287a1 1 0 0 1 1.654 1.124Z" />
    </svg>
  );
});

Ball.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Ball.displayName = 'Ball';

export default Ball;
