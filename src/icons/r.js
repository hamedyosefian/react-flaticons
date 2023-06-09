import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const R = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M17.379 14.424C24.835 11.256 22.707.1 14.5 0H7C4.243 0 2 2.243 2 5v18c.006 1.308 1.995 1.307 2 0v-8h10.5c.298 0 .591-.022.881-.056l4.745 8.542a1 1 0 0 0 1.748-.97l-4.495-8.091ZM4 13V5c0-1.654 1.346-3 3-3h7.5c7.27.233 7.265 10.77 0 11H4Z" />
    </svg>
  );
});

R.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

R.displayName = 'R';

export default R;
