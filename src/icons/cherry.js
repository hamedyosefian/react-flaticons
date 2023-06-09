import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Cherry = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M20.4 13a3.162 3.162 0 0 0-1.98.565C18.051 9.492 16.137 4.98 12.809.411a1.038 1.038 0 0 0-1.618 0C7.86 4.984 5.946 9.5 5.577 13.575 3.275 12-.059 13.741 0 17.5c0 6.5 8.625 8.906 12 3.448C15.378 26.407 24 24 24 17.5c0-2.816-1.829-4.5-3.6-4.5ZM12 2.739a24.5 24.5 0 0 1 4.408 10.723 3.4 3.4 0 0 0-4.408.915 3.4 3.4 0 0 0-4.4-.926A24.51 24.51 0 0 1 12 2.739ZM6.5 22A4.505 4.505 0 0 1 2 17.5C2 15.63 3.077 15 3.568 15c1.368.025 1.132 1.025 2.932 1 1.814.016 1.555-.982 2.9-1 .5 0 1.6.63 1.6 2.5A4.505 4.505 0 0 1 6.5 22Zm11 0a4.505 4.505 0 0 1-4.5-4.5c0-1.87 1.077-2.5 1.568-2.5 1.368.025 1.132 1.025 2.932 1 1.814.016 1.555-.982 2.9-1 .5 0 1.6.63 1.6 2.5a4.505 4.505 0 0 1-4.5 4.5Z" />
    </svg>
  );
});

Cherry.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Cherry.displayName = 'Cherry';

export default Cherry;
