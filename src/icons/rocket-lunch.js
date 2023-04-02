import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const RocketLunch = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M1.879 17.878a11.259 11.259 0 0 0-1.835 4 1.739 1.739 0 0 0 2.083 2.082 11.263 11.263 0 0 0 3.994-1.834 3 3 0 0 0-4.242-4.248Zm2.828 2.829a10.07 10.07 0 0 1-2.6 1.184 10.1 10.1 0 0 1 1.184-2.6 1 1 0 0 1 1.414 1.414ZM18 8.5a2.5 2.5 0 0 1-5 0 2.5 2.5 0 0 1 5 0ZM20.972 0A15.487 15.487 0 0 0 8.634 6.006a11.065 11.065 0 0 0-4.569 1.163 8.1 8.1 0 0 0-3.822 3.666 2.955 2.955 0 0 0 .25 2.8A3.009 3.009 0 0 0 3.014 15H5.5A3.517 3.517 0 0 1 9 18.5v2.486a3.009 3.009 0 0 0 1.363 2.521 2.955 2.955 0 0 0 2.8.25 8.1 8.1 0 0 0 3.666-3.822 11.065 11.065 0 0 0 1.163-4.569A15.507 15.507 0 0 0 24 3a3.009 3.009 0 0 0-3.028-3ZM4.346 13H3.014a1 1 0 0 1-.85-.461.95.95 0 0 1-.085-.91 6.176 6.176 0 0 1 2.883-2.672 8.993 8.993 0 0 1 1.993-.72A34.361 34.361 0 0 0 4.346 13Zm10.7 6.038a6.18 6.18 0 0 1-2.671 2.883.951.951 0 0 1-.911-.085 1 1 0 0 1-.461-.85v-1.332a34.361 34.361 0 0 0 4.763-2.609 8.993 8.993 0 0 1-.723 1.993Zm.135-4.02a29.92 29.92 0 0 1-4.271 2.471 5.5 5.5 0 0 0-4.4-4.4 29.92 29.92 0 0 1 2.472-4.267C12.35 4.124 15.84 2.147 21 2a1 1 0 0 1 1 .972c-.147 5.188-2.124 8.678-6.822 12.046Z" />
    </svg>
  );
});

RocketLunch.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

RocketLunch.displayName = 'RocketLunch';

export default RocketLunch;
