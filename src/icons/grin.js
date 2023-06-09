import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Grin = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M12 0A12.013 12.013 0 0 0 0 12c.6 15.9 23.4 15.893 24 0A12.013 12.013 0 0 0 12 0Zm0 22A10.011 10.011 0 0 1 2 12c.5-13.248 19.5-13.244 20 0a10.011 10.011 0 0 1-10 10ZM7 9.5a1.5 1.5 0 0 1 3 0 1.5 1.5 0 0 1-3 0Zm7 0a1.5 1.5 0 0 1 3 0 1.5 1.5 0 0 1-3 0Zm3.842 6.042A6.827 6.827 0 0 1 12 19a6.836 6.836 0 0 1-5.848-3.458A1 1 0 0 1 7.2 14.024 15.4 15.4 0 0 0 12 15a15.4 15.4 0 0 0 4.792-.976 1 1 0 0 1 1.05 1.518Z" />
    </svg>
  );
});

Grin.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Grin.displayName = 'Grin';

export default Grin;
