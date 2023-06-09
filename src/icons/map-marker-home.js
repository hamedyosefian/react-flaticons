import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const MapMarkerHome = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M12 0a11 11 0 0 0-7.75 18.806l3.943 3.641a5.442 5.442 0 0 0 7.593.02l3.992-3.689A11 11 0 0 0 12 0Zm6.392 17.337-3.984 3.681A3.513 3.513 0 0 1 9.571 21l-3.935-3.636A9 9 0 1 1 21 11a8.922 8.922 0 0 1-2.608 6.337ZM16.71 7.663l-3-2.081a3.008 3.008 0 0 0-3.42 0l-3 2.081A3 3 0 0 0 6 10.128V13.5A2.5 2.5 0 0 0 8.5 16h7a2.5 2.5 0 0 0 2.5-2.5v-3.372a3 3 0 0 0-1.29-2.465ZM16 13.5a.5.5 0 0 1-.5.5H14v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2H8.5a.5.5 0 0 1-.5-.5v-3.372a1 1 0 0 1 .43-.822l3-2.081a1.006 1.006 0 0 1 1.14 0l3 2.081a1 1 0 0 1 .43.822Z" />
    </svg>
  );
});

MapMarkerHome.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MapMarkerHome.displayName = 'MapMarkerHome';

export default MapMarkerHome;
