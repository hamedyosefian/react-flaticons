import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const MapMarker = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2Zm8.66 3.157-.719-.239A8 8 0 0 0 12 0a7.993 7.993 0 0 0-7.914 9.092 5.045 5.045 0 0 0-2.548 1.3A4.946 4.946 0 0 0 0 14v4.075a5.013 5.013 0 0 0 3.6 4.8l2.87.9A4.981 4.981 0 0 0 7.959 24a5.076 5.076 0 0 0 1.355-.186l5.78-1.71a2.987 2.987 0 0 1 1.573 0l2.387.8A4 4 0 0 0 24 19.021v-5.149a5.015 5.015 0 0 0-3.34-4.716ZM7.758 3.762a5.987 5.987 0 0 1 8.484 0 6.037 6.037 0 0 1 .011 8.5L12.7 15.717a.992.992 0 0 1-1.389 0l-3.553-3.44a6.04 6.04 0 0 1 0-8.515ZM22 19.021a1.991 1.991 0 0 1-.764 1.572 1.969 1.969 0 0 1-1.626.395l-2.345-.788a5.023 5.023 0 0 0-2.717-.016l-5.784 1.708a3 3 0 0 1-1.694-.029l-2.894-.9A3.013 3.013 0 0 1 2 18.075V14a2.964 2.964 0 0 1 .92-2.163 3.024 3.024 0 0 1 1.669-.806A8.021 8.021 0 0 0 6.354 13.7l3.567 3.453a2.983 2.983 0 0 0 4.174 0l3.563-3.463a7.962 7.962 0 0 0 1.813-2.821l.537.178A3.006 3.006 0 0 1 22 13.872Z" />
    </svg>
  );
});

MapMarker.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MapMarker.displayName = 'MapMarker';

export default MapMarker;
