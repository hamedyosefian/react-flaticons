import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Angry = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M19 8a1 1 0 0 1-1 1 2.31 2.31 0 0 0-1.47.41A1.5 1.5 0 1 1 14 10.481c0-.981.708-3.475 4-3.481a1 1 0 0 1 1 1ZM7 10.5a1.5 1.5 0 0 0 3-.019C10 9.5 9.292 7.006 6 7a1 1 0 0 0 0 2 2.315 2.315 0 0 1 1.472.409A1.491 1.491 0 0 0 7 10.5ZM24 12a12.013 12.013 0 0 1-12 12C-3.9 23.4-3.893.6 12 0a12.013 12.013 0 0 1 12 12Zm-2 0A10.011 10.011 0 0 0 12 2c-13.248.5-13.245 19.5 0 20a10.011 10.011 0 0 0 10-10Zm-4.334 4.254a8.375 8.375 0 0 0-11.332 0 1 1 0 0 0 1.33 1.494 6.358 6.358 0 0 1 8.671 0 1 1 0 0 0 1.331-1.493Z" />
    </svg>
  );
});

Angry.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Angry.displayName = 'Angry';

export default Angry;
