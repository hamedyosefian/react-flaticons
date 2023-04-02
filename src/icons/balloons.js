import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Balloons = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M18.848 11.53A7.674 7.674 0 0 0 19.977 8a1 1 0 0 0-2 0 5.712 5.712 0 0 1-.825 2.47 1 1 0 0 0 1.7 1.06ZM8.977 7a1 1 0 0 0-1 1 5.712 5.712 0 0 1-.825 2.47 1 1 0 0 0 1.7 1.06A7.674 7.674 0 0 0 9.977 8a1 1 0 0 0-1-1Z" />
      <path d="M19.5 18.589c-.682-.362-1.386-.737-1.484-1.162-.046-.193-.025-.628.515-1.473C21.7 15.5 24 11.025 24 7a5.8 5.8 0 0 0-6-6 5.862 5.862 0 0 0-4.955 2.487A6.994 6.994 0 0 0 0 7c0 3.971 2.257 8.485 5.39 9.685A2.822 2.822 0 0 0 5 17.87c0 1.571 1.489 2.267 2.576 2.776.6.28 1.424.665 1.424.963a2.291 2.291 0 0 1-.428.851 1 1 0 0 0 1.684 1.08A3.745 3.745 0 0 0 11 21.609c0-1.571-1.489-2.267-2.576-2.775-.6-.281-1.424-.666-1.433-.865a5.379 5.379 0 0 1 .568-1.016c2.352-.306 4.331-2.5 5.452-5.2a7.37 7.37 0 0 0 3.413 3.892 3.381 3.381 0 0 0-.356 2.238c.306 1.31 1.519 1.955 2.494 2.474.616.328 1.313.7 1.419 1.068a1.627 1.627 0 0 1-.315 1.078 1 1 0 1 0 1.732 1 3.329 3.329 0 0 0 .506-2.627 4.166 4.166 0 0 0-2.404-2.287ZM7 15c-2.646 0-5-4.474-5-8a5 5 0 0 1 10 0c0 3.526-2.354 8-5 8Zm7-8a3.792 3.792 0 0 1 4-4 3.792 3.792 0 0 1 4 4c0 3.4-2.056 7-4 7s-4-3.6-4-7Z" />
    </svg>
  );
});

Balloons.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Balloons.displayName = 'Balloons';

export default Balloons;
