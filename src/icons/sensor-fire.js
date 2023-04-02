import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const SensorFire = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M19.095 9.547c-.521-.452-1.012-.878-1.388-1.254a.94.94 0 0 0-.743-.292c-.277.01-.538.135-.72.345-1.081 1.248-1.477 2.914-1.795 4.253-.09.378-.201.849-.311 1.173a2.495 2.495 0 0 1-.139-.772 1 1 0 0 0-1.718-.697c-1.129 1.164-2.282 2.631-2.282 4.696 0 3.86 3.141 7 7 7s7-3.14 7-7c0-3.195-2.835-5.656-4.905-7.453ZM15.94 21.596c-.283-.283-.439-.66-.439-1.06s.156-.777.439-1.061l1.061-1.061 1.061 1.061c.283.284.439.66.439 1.061s-.156.777-.439 1.061c-.195.195-.407.404-1.061.404s-.866-.209-1.061-.404Zm4.56-1.029v-.032c0-.935-.364-1.814-1.025-2.475l-1.768-1.768a.999.999 0 0 0-1.414 0l-1.768 1.768a3.477 3.477 0 0 0-1.025 2.475v.032A4.986 4.986 0 0 1 12 17c0-.71.214-1.325.582-1.915.375.546.937.915 1.7.915 1.414 0 1.77-1.494 2.113-2.939.198-.835.415-1.75.792-2.524.192.17.393.343.597.52C19.662 12.688 22 14.717 22 17a4.985 4.985 0 0 1-1.5 3.567ZM24 5v4a1 1 0 1 1-2 0V5c0-1.654-1.346-3-3-3H5C3.346 2 2 3.346 2 5v14c0 1.654 1.346 3 3 3h4a1 1 0 1 1 0 2H5c-2.757 0-5-2.243-5-5V5c0-2.757 2.243-5 5-5h14c2.757 0 5 2.243 5 5ZM5 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm5 1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
    </svg>
  );
});

SensorFire.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SensorFire.displayName = 'SensorFire';

export default SensorFire;
