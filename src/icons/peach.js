import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Peach = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M20.6 5.235C22.74 2.682 22.513-.173 18.74 0a7.159 7.159 0 0 0-6.191 3.439A4.657 4.657 0 0 0 8 0a1 1 0 0 0 0 2c1.915 0 2.605 1.621 2.855 2.8A7.536 7.536 0 0 0 0 11.5C0 19.588 7.927 24 12 24s12-4.412 12-12.5a7.471 7.471 0 0 0-3.4-6.265ZM18.74 2a5.958 5.958 0 0 1 1.233.125c-.659 2.694-3.12 4-6.48 3.865A5.573 5.573 0 0 1 18.74 2ZM12 22C9.01 22 2 18.428 2 11.5c.232-7.268 10.769-7.268 11 0a12.252 12.252 0 0 1-1.833 5.946 1 1 0 0 0 1.665 1.109c.792-.88 3.532-7.093 1.293-10.563a8.9 8.9 0 0 0 4.928-1.349A5.477 5.477 0 0 1 22 11.5C22 18.428 14.99 22 12 22Z" />
    </svg>
  );
});

Peach.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Peach.displayName = 'Peach';

export default Peach;
