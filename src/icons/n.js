import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const N = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M18.37 24.006c-1.411 0-2.662-.813-3.246-2.178L7.038 2.96c-.375-.876-1.163-1.051-1.773-.927C4.654 2.158 4 2.632 4 3.584V23c-.005 1.308-1.995 1.307-2 0V3.583C2 1.835 3.15.425 4.862.074 6.57-.279 8.187.565 8.876 2.172l8.086 18.869c.375.874 1.159 1.049 1.773.927.611-.126 1.265-.6 1.265-1.551V1c.006-1.308 1.995-1.307 2 0v19.417c0 1.748-1.15 3.158-2.862 3.51a3.83 3.83 0 0 1-.768.079Z" />
    </svg>
  );
});

N.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

N.displayName = 'N';

export default N;
