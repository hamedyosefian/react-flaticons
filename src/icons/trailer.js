import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Trailer = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M491.52 399.344h-40.96v-286.72c-.068-56.526-45.874-102.332-102.4-102.4H102.4C45.874 10.291.068 56.098 0 112.624v225.28c.07 49.476 35.444 91.852 84.111 100.762 10.998 44.038 55.613 70.822 99.65 59.824a82.186 82.186 0 0 0 59.397-58.186H491.52c11.311 0 20.48-9.169 20.48-20.48s-9.169-20.48-20.48-20.48zM102.4 51.184h245.76c33.932 0 61.44 27.508 61.44 61.44v143.36h-40.96v-143.36c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48v143.36h-40.96v-143.36c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48v143.36H204.8v-143.36c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48v143.36h-40.96v-143.36c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48v143.36H40.96v-143.36c0-33.933 27.508-61.44 61.44-61.44zm-61.44 286.72v-40.96H409.6v102.4H243.159c-11.929-43.818-57.122-69.669-100.94-57.739a82.228 82.228 0 0 0-57.023 55.261c-26.206-7.644-44.227-31.663-44.236-58.962zm122.88 122.88c-22.622 0-40.96-18.338-40.96-40.96s18.338-40.96 40.96-40.96 40.96 18.338 40.96 40.96-18.338 40.96-40.96 40.96z" />
    </svg>
  );
});

Trailer.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Trailer.displayName = 'Trailer';

export default Trailer;
