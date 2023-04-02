import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const EclipseAlt = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M23 11h-3.062a7.956 7.956 0 0 0-.575-2.129l2.655-1.546A1 1 0 0 0 21.012 5.6l-2.658 1.545a8.1 8.1 0 0 0-1.507-1.5l1.541-2.648a1 1 0 0 0-1.729-1.006L15.12 4.633A7.971 7.971 0 0 0 13 4.062V1a1 1 0 0 0-2 0v3.062a7.965 7.965 0 0 0-2.108.566L7.355 1.986a1 1 0 1 0-1.728 1.006l1.536 2.641a8.046 8.046 0 0 0-1.512 1.506L3 5.6a1 1 0 0 0-1 1.725l2.64 1.54A7.955 7.955 0 0 0 4.062 11H1a1 1 0 0 0 0 2h3.062a7.957 7.957 0 0 0 .576 2.129L2 16.662a1 1 0 0 0 1.01 1.729l2.637-1.535a8.083 8.083 0 0 0 1.5 1.5L5.6 21a1 1 0 0 0 1.73 1.007l1.538-2.646a7.943 7.943 0 0 0 2.132.577V23a1 1 0 0 0 2 0v-3.062a7.934 7.934 0 0 0 2.143-.582l1.543 2.651A1 1 0 0 0 18.414 21l-1.546-2.657a8.076 8.076 0 0 0 1.49-1.494l2.647 1.541a1 1 0 0 0 1.006-1.729l-2.646-1.54A7.941 7.941 0 0 0 19.938 13H23a1 1 0 0 0 0-2Zm-11 7c-7.644-.094-8.208-11.68 0-12 7.929.252 7.928 11.749 0 12Zm1.455-2.229C7.889 17.5 5.64 9.3 11.361 8.051a4.393 4.393 0 0 1 1.683.068.544.544 0 0 1 .243.918 3.7 3.7 0 0 0 .319 5.793.545.545 0 0 1-.151.941Z" />
  </svg>
));

EclipseAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

EclipseAlt.displayName = 'EclipseAlt';

export default EclipseAlt;