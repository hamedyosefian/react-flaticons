import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Taco = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M18 15a1 1 0 0 1-2 0 1 1 0 0 1 2 0Zm-3 2a1 1 0 0 0 0 2 1 1 0 0 0 0-2Zm3 1a1 1 0 0 0 2 0 1 1 0 0 0-2 0Zm4.988-7.732c1.257 2.14 1 5.337 1.012 7.732a5.006 5.006 0 0 1-5 5H3.5A3.5 3.5 0 0 1 0 19.5c.026-3.511-.523-8.3 2.063-11.123a1 1 0 0 1 1.563 1.247A7.486 7.486 0 0 0 2 14.274V19.5a1.5 1.5 0 0 0 3 0c.05-2.675-.358-6.812 1.044-9.169C4.647 7.907 4.177 3.9 8.257 3.063a3.315 3.315 0 0 1 3.8-1.947 3.23 3.23 0 0 1 4.918-.011 3.308 3.308 0 0 1 3.768 1.958c4.017.828 3.644 4.737 2.245 7.205ZM7.356 8.351a9.461 9.461 0 0 1 14.316-.08C22.353 6.658 21.983 5.073 20 5a1 1 0 0 1-.98-.8A1.464 1.464 0 0 0 17.688 3a1.739 1.739 0 0 0-.583.2 1 1 0 0 1-1.241-.317c-.981-1.261-1.815-1.153-2.7.025a1 1 0 0 1-1.242.317A2.031 2.031 0 0 0 11.337 3 1.493 1.493 0 0 0 9.98 4.2 1 1 0 0 1 9 5c-2.032.073-2.348 1.729-1.644 3.351ZM22 14.5c-.377-10.039-14.77-9.888-15 .291-.088 1.112.267 5.25-.338 6.209H19a3 3 0 0 0 3-3Z" />
    </svg>
  );
});

Taco.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Taco.displayName = 'Taco';

export default Taco;
