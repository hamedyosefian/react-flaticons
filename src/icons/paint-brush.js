import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const PaintBrush = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M23.1.9a3.139 3.139 0 0 0-4.33 0L7.563 12.1a5.548 5.548 0 0 0-1.058-.1 5.457 5.457 0 0 0-3.885 1.609C1.268 14.962.314 18.592.031 20.563A3 3 0 0 0 3 24a3.1 3.1 0 0 0 .439-.031c1.971-.283 5.6-1.237 6.954-2.589a5.494 5.494 0 0 0 1.5-4.941L23.1 5.23a3.068 3.068 0 0 0 0-4.33zM8.977 19.966c-.725.725-3.5 1.689-5.824 2.023a1.015 1.015 0 0 1-.859-.283 1 1 0 0 1-.282-.859c.333-2.323 1.3-5.1 2.022-5.824a3.5 3.5 0 0 1 4.943 4.943zm12.711-16.15L11.067 14.438a5.378 5.378 0 0 0-1.5-1.508L20.184 2.312a1.086 1.086 0 0 1 1.5 0 1.062 1.062 0 0 1 .004 1.504z" />
    </svg>
  );
});

PaintBrush.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PaintBrush.displayName = 'PaintBrush';

export default PaintBrush;
