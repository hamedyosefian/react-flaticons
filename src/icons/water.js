import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Water = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M21 23a4.375 4.375 0 0 1-3-1.225 4.336 4.336 0 0 1-6 0 4.336 4.336 0 0 1-6 0 4.186 4.186 0 0 1-5.668.2 1 1 0 1 1 1.335-1.489 2.2 2.2 0 0 0 3.388-.817 1.006 1.006 0 0 1 1.89 0 2.278 2.278 0 0 0 4.11 0 1.008 1.008 0 0 1 1.89 0 2.278 2.278 0 0 0 4.11 0 1.006 1.006 0 0 1 1.89 0 2.2 2.2 0 0 0 3.387.817 1 1 0 0 1 1.336 1.487A3.981 3.981 0 0 1 21 23Zm0-6a4.375 4.375 0 0 1-3-1.225 4.336 4.336 0 0 1-6 0 4.336 4.336 0 0 1-6 0 4.186 4.186 0 0 1-5.668.2 1 1 0 1 1 1.335-1.489 2.2 2.2 0 0 0 3.388-.817 1.006 1.006 0 0 1 1.89 0 2.278 2.278 0 0 0 4.11 0 1.007 1.007 0 0 1 1.89 0 2.278 2.278 0 0 0 4.11 0 1.007 1.007 0 0 1 1.89 0 2.2 2.2 0 0 0 3.387.817 1 1 0 0 1 1.336 1.487A3.981 3.981 0 0 1 21 17Zm0-6a4.375 4.375 0 0 1-3-1.225 4.336 4.336 0 0 1-6 0 4.336 4.336 0 0 1-6 0 4.186 4.186 0 0 1-5.668.2 1 1 0 1 1 1.335-1.486 2.2 2.2 0 0 0 3.388-.817 1.006 1.006 0 0 1 1.89 0 2.278 2.278 0 0 0 4.11 0 1.008 1.008 0 0 1 1.89 0 2.278 2.278 0 0 0 4.11 0 1.006 1.006 0 0 1 1.89 0 2.2 2.2 0 0 0 3.387.817 1 1 0 0 1 1.336 1.487A3.981 3.981 0 0 1 21 11Zm0-6a4.375 4.375 0 0 1-3-1.225 4.336 4.336 0 0 1-6 0 4.336 4.336 0 0 1-6 0 4.186 4.186 0 0 1-5.668.2 1 1 0 1 1 1.335-1.486 2.2 2.2 0 0 0 3.388-.817 1.006 1.006 0 0 1 1.89 0 2.278 2.278 0 0 0 4.11 0 1.008 1.008 0 0 1 1.875-.041l.015.042a2.278 2.278 0 0 0 4.11 0 1.008 1.008 0 0 1 1.89 0 2.2 2.2 0 0 0 3.387.817 1 1 0 1 1 1.336 1.487A3.981 3.981 0 0 1 21 5Z" />
    </svg>
  );
});

Water.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Water.displayName = 'Water';

export default Water;
