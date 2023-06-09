import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const MapMarkerMinus = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M174.376 479.018c44.884 43.908 116.571 44.088 161.674.405l85-78.548c92.079-90.853 93.072-239.148 2.22-331.227s-239.148-93.073-331.227-2.22a232.33 232.33 0 0 0-2.22 2.22c-91.46 91.475-91.448 239.774.027 331.234.19.19.379.379.57.567l83.956 77.569zM119.931 99.755c74.673-75.008 196.014-75.28 271.022-.607s75.28 196.014.607 271.022l-84.851 78.399c-28.975 27.269-74.221 27.101-102.992-.383l-83.786-77.42c-74.838-74.837-74.838-196.172-.002-271.01l.002-.001zm29.043 135.506c0-11.76 9.533-21.293 21.293-21.293h170.34c11.76 0 21.293 9.533 21.293 21.293s-9.533 21.293-21.293 21.293h-170.34c-11.76-.001-21.293-9.534-21.293-21.293z" />
    </svg>
  );
});

MapMarkerMinus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MapMarkerMinus.displayName = 'MapMarkerMinus';

export default MapMarkerMinus;
