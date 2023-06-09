import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const HockeyPuck = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M12 0C5.383 0 0 3.813 0 8.5v7C0 20.187 5.383 24 12 24s12-3.813 12-8.5v-7C24 3.813 18.617 0 12 0Zm0 2c5.514 0 10 2.916 10 6.5S17.514 15 12 15 2 12.084 2 8.5 6.486 2 12 2Zm10 13.5c0 3.584-4.486 6.5-10 6.5S2 19.084 2 15.5v-2.307A13.809 13.809 0 0 0 12 17a13.809 13.809 0 0 0 10-3.807Z" />
    </svg>
  );
});

HockeyPuck.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

HockeyPuck.displayName = 'HockeyPuck';

export default HockeyPuck;
