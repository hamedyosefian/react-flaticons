import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const PaintRoller = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M20 3c0-1.654-1.346-3-3-3H3C1.346 0 0 1.346 0 3v2c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3 1.103 0 2 .897 2 2v1c0 1.103-.897 2-2 2h-7c-2.206 0-4 1.794-4 4v.184A2.996 2.996 0 0 0 7 17v4c0 1.654 1.346 3 3 3s3-1.346 3-3v-4a2.996 2.996 0 0 0-2-2.816V14c0-1.103.897-2 2-2h7c2.206 0 4-1.794 4-4V7c0-2.206-1.794-4-4-4Zm-2 2c0 .552-.449 1-1 1H3c-.551 0-1-.448-1-1V3c0-.552.449-1 1-1h14c.551 0 1 .448 1 1v2Zm-7 16a1.001 1.001 0 0 1-2 0v-4a1.001 1.001 0 0 1 2 0v4Z" />
    </svg>
  );
});

PaintRoller.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PaintRoller.displayName = 'PaintRoller';

export default PaintRoller;
