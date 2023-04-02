import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const TruckPlow = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M505.365 436.248a140.026 140.026 0 0 1-41.282-99.672v-76.7a140.026 140.026 0 0 1 41.282-99.672c8.235-8.237 8.235-21.59 0-29.828-42.189-34.152-89.716 97.394-83.472 129.5v17.255h-44.868a84.677 84.677 0 0 0-43.075-53.918l-.232-.338L241.26 90.253a105.474 105.474 0 0 0-86.509-45.164h-7.088c-34.951 0-63.284 28.333-63.284 63.284v105.473C37.778 213.847 0 251.625 0 298.226v42.189a42.19 42.19 0 0 0 21.095 36.515v16.222c0 40.776 33.055 73.831 73.831 73.831s73.831-33.055 73.831-73.831v-10.547h42.189v10.547c0 40.776 33.055 73.831 73.831 73.831s73.831-33.055 73.831-73.831V376.93a42.188 42.188 0 0 0 21.095-36.515V319.32h42.189v17.255a181.942 181.942 0 0 0 53.644 129.5l1.308 1.329c20.189 19.239 48.055-12.128 28.521-31.156zM126.568 108.374c0-11.65 9.444-21.095 21.095-21.095h7.088a63.282 63.282 0 0 1 51.977 27.086l69.275 99.482H126.568V108.374zM42.189 298.226c0-23.301 18.889-42.189 42.189-42.189h210.947c23.301 0 42.189 18.889 42.189 42.189v42.189H42.189v-42.189zm84.379 94.926c0 17.475-14.167 31.642-31.642 31.642s-31.642-14.167-31.642-31.642v-10.547h63.284v10.547zm158.21 31.642c-17.475 0-31.642-14.167-31.642-31.642v-10.547h63.284v10.547c0 17.475-14.167 31.642-31.642 31.642z" />
    </svg>
  );
});

TruckPlow.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TruckPlow.displayName = 'TruckPlow';

export default TruckPlow;
