import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const CaravanAlt = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M491.52 399.344h-40.96v-286.72c-.068-56.526-45.874-102.332-102.4-102.4H102.4C45.874 10.291.068 56.098 0 112.624v225.28c.07 49.476 35.444 91.852 84.111 100.762 10.998 44.038 55.613 70.822 99.65 59.824a82.186 82.186 0 0 0 59.397-58.186H491.52c11.311 0 20.48-9.169 20.48-20.48s-9.169-20.48-20.48-20.48zM40.96 174.064h92.16c5.655 0 10.24 4.585 10.24 10.24v40.96c0 5.655-4.585 10.24-10.24 10.24H40.96v-61.44zm0 163.84v-61.44h92.16c28.277 0 51.2-22.923 51.2-51.2v-40.96c0-28.277-22.923-51.2-51.2-51.2H40.96v-20.48c0-33.932 27.508-61.44 61.44-61.44h245.76c33.932 0 61.44 27.508 61.44 61.44v286.72H243.159c-11.929-43.818-57.122-69.669-100.94-57.739a82.228 82.228 0 0 0-57.023 55.261c-26.206-7.644-44.227-31.663-44.236-58.962zm122.88 122.88c-22.622 0-40.96-18.338-40.96-40.96s18.338-40.96 40.96-40.96 40.96 18.338 40.96 40.96-18.338 40.96-40.96 40.96zm112.64-184.32h40.96c28.277 0 51.2-22.923 51.2-51.2v-40.96c0-28.277-22.923-51.2-51.2-51.2h-40.96c-28.277 0-51.2 22.923-51.2 51.2v40.96c0 28.277 22.923 51.2 51.2 51.2zm-10.24-92.16c0-5.655 4.585-10.24 10.24-10.24h40.96c5.655 0 10.24 4.585 10.24 10.24v40.96c0 5.655-4.585 10.24-10.24 10.24h-40.96c-5.655 0-10.24-4.585-10.24-10.24v-40.96z" />
    </svg>
  );
});

CaravanAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CaravanAlt.displayName = 'CaravanAlt';

export default CaravanAlt;
