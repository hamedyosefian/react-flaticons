import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const HourglassEnd = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M17 24H7.005a4.014 4.014 0 0 1-3.044-1.4 3.94 3.94 0 0 1-.917-3.158A12.522 12.522 0 0 1 7.445 12a12.522 12.522 0 0 1-4.4-7.444A3.94 3.94 0 0 1 3.961 1.4 4.014 4.014 0 0 1 7.005 0H17a4.017 4.017 0 0 1 3.044 1.4 3.943 3.943 0 0 1 .918 3.155A12.556 12.556 0 0 1 16.551 12a12.557 12.557 0 0 1 4.406 7.448 3.944 3.944 0 0 1-.918 3.156A4.017 4.017 0 0 1 17 24Zm0-22H7.005a2.015 2.015 0 0 0-1.528.7 1.921 1.921 0 0 0-.456 1.556c.376 2.5 1.924 4.84 4.6 6.957a1 1 0 0 1 0 1.568c-2.676 2.119-4.221 4.461-4.6 6.96a1.921 1.921 0 0 0 .456 1.559 2.015 2.015 0 0 0 1.528.7H17a2.014 2.014 0 0 0 1.528-.7 1.917 1.917 0 0 0 .456-1.554c-.373-2.487-1.92-4.829-4.6-6.962a1 1 0 0 1 0-1.564c2.681-2.133 4.228-4.475 4.6-6.963a1.916 1.916 0 0 0-.461-1.557A2.014 2.014 0 0 0 17 2Zm-1.319 18H8.318a1 1 0 0 1-.927-1.374 11.185 11.185 0 0 1 3.471-4.272l.518-.412a1 1 0 0 1 1.245 0l.509.406a11.3 11.3 0 0 1 3.473 4.276A1 1 0 0 1 15.681 20Zm-5.647-2h3.928A11.57 11.57 0 0 0 12 16a11.3 11.3 0 0 0-1.966 2Z" />
    </svg>
  );
});

HourglassEnd.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

HourglassEnd.displayName = 'HourglassEnd';

export default HourglassEnd;
