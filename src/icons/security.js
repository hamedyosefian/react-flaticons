import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Security = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M23.983 21.926a32.651 32.651 0 0 0-.608-5.545A3 3 0 0 0 20.439 14h-2.1l-.3-3.635.391-.042a3.007 3.007 0 0 0 2.29-4.238C19.084 2.559 14.786 0 10.5 0A10.512 10.512 0 0 0 0 10.5a39.043 39.043 0 0 0 .587 5.155 4.99 4.99 0 0 0 3.457 3.989c.514.161 1.02.311 1.519.458a25.17 25.17 0 0 1 4.1 1.467 4.072 4.072 0 0 0 1.816.431 3.975 3.975 0 0 0 2.777-1.123l1.1-.877h1.475l.071.855a2.978 2.978 0 0 0 2.137 2.631 25.208 25.208 0 0 0 2.94.514 2.013 2.013 0 0 0 2-2.074ZM20.439 16a.994.994 0 0 1 .977.783c.061.3.138.709.215 1.217h-2.964l-.167-2Zm-4.11-2h-3.024a2.888 2.888 0 0 1 .035-1.237 2.853 2.853 0 0 1 2.338-2.142l.367-.04Zm-3.445 5.422a2.016 2.016 0 0 1-2.329.357 26.63 26.63 0 0 0-4.425-1.594c-.487-.145-.983-.291-1.485-.45a3 3 0 0 1-2.082-2.394A38.713 38.713 0 0 1 2 10.5 8.51 8.51 0 0 1 10.5 2c3.489 0 7.1 2.118 8.406 4.927a1.009 1.009 0 0 1-.732 1.412l-2.747.3a4.874 4.874 0 0 0-3.564 7.181l1.692 3.058-.671.544ZM15.355 18l-1.106-2H16.5l.166 2Zm4.245 3.567a.99.99 0 0 1-.707-.878l-.06-.689h3.034c.053.608.094 1.277.113 2a11.842 11.842 0 0 1-2.38-.433ZM10 16a1 1 0 1 1-1-1 1 1 0 0 1 1 1Z" />
    </svg>
  );
});

Security.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Security.displayName = 'Security';

export default Security;
