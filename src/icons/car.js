import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Car = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M20.9 4.291A5.011 5.011 0 0 0 16.2 1H7.8a5.011 5.011 0 0 0-4.7 3.291L.4 11.718A6.664 6.664 0 0 0 0 14v1a4.979 4.979 0 0 0 2 3.978V21a3 3 0 0 0 6 0v-1h8v1a3 3 0 0 0 6 0v-2.022A4.979 4.979 0 0 0 24 15v-1a6.654 6.654 0 0 0-.4-2.281Zm-15.918.684A3.009 3.009 0 0 1 7.8 3h8.4a3.009 3.009 0 0 1 2.82 1.975L21.208 11H2.791ZM6 21a1 1 0 0 1-2 0v-1.1a5 5 0 0 0 1 .1h1Zm14 0a1 1 0 0 1-2 0v-1h1a5 5 0 0 0 1-.1Zm2-6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-1a4.659 4.659 0 0 1 .121-1H4v1a1 1 0 0 0 2 0v-1h12v1a1 1 0 0 0 2 0v-1h1.879A4.652 4.652 0 0 1 22 14Z" />
    </svg>
  );
});

Car.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Car.displayName = 'Car';

export default Car;
