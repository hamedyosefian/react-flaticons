import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const LocationAlt = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M256 341.333a63.994 63.994 0 0 0 28.629-6.699l42.667-21.333A63.702 63.702 0 0 0 362.667 256v-63.296a63.679 63.679 0 0 0-35.371-57.237l-42.667-21.333a64.299 64.299 0 0 0-57.237 0l-42.667 21.333a63.68 63.68 0 0 0-35.392 57.237V256a63.701 63.701 0 0 0 35.371 57.259l42.667 21.333A64 64 0 0 0 256 341.333zM192 256v-63.296a21.333 21.333 0 0 1 1.088-6.4l46.507 23.253a36.695 36.695 0 0 0 32.811 0l46.507-23.253a21.333 21.333 0 0 1 1.088 6.4V256a21.205 21.205 0 0 1-11.797 19.093l-42.667 21.333a21.525 21.525 0 0 1-19.093 0l-42.667-21.333A21.203 21.203 0 0 1 192 256zm213.333 213.333h-57.792l74.389-68.736c91.645-91.642 91.647-240.224.005-331.869s-240.223-91.646-331.868-.005-91.647 240.225-.005 331.869c.201.201 74.397 68.741 74.397 68.741h-57.792c-11.782 0-21.333 9.551-21.333 21.333 0 11.782 9.551 21.333 21.333 21.333h298.667c11.782 0 21.333-9.551 21.333-21.333 0-11.781-9.552-21.333-21.334-21.333zM120.235 98.901c74.816-75.152 196.389-75.424 271.541-.608s75.424 196.389.608 271.541l-85.013 78.528c-29.016 27.349-74.366 27.19-103.189-.363l-83.947-77.568c-74.865-75.029-74.864-196.5 0-271.53z" />
    </svg>
  );
});

LocationAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

LocationAlt.displayName = 'LocationAlt';

export default LocationAlt;
