import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Mask = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M12 0C5.935 0 1 4.686 1 10.444 1 15.9 5.619 24 12 24s11-8.1 11-13.556C23 4.686 18.065 0 12 0Zm0 22c-4.968 0-9-6.992-9-11.556A8.746 8.746 0 0 1 12 2a8.746 8.746 0 0 1 9 8.444C21 15.008 16.968 22 12 22Zm7-11a2.292 2.292 0 0 1-2.5 2 2.292 2.292 0 0 1-2.5-2 2.292 2.292 0 0 1 2.5-2 2.292 2.292 0 0 1 2.5 2ZM7.5 13A2.292 2.292 0 0 1 5 11a2.292 2.292 0 0 1 2.5-2 2.292 2.292 0 0 1 2.5 2 2.292 2.292 0 0 1-2.5 2Zm3.5 3a1 1 0 1 1-1-1 1 1 0 0 1 1 1Zm4 0a1 1 0 1 1-1-1 1 1 0 0 1 1 1ZM9 5a1 1 0 1 1 1 1 1 1 0 0 1-1-1Zm4 3a1 1 0 1 1-1-1 1 1 0 0 1 1 1Zm0-3a1 1 0 1 1 1 1 1 1 0 0 1-1-1Zm-2 14a1 1 0 1 1-1-1 1 1 0 0 1 1 1Zm4 0a1 1 0 1 1-1-1 1 1 0 0 1 1 1Z" />
    </svg>
  );
});

Mask.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Mask.displayName = 'Mask';

export default Mask;
