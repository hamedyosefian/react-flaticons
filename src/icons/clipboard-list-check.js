import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const ClipboardListCheck = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M16 12h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm1 4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 1-1Zm4 3V7c0-2.757-2.243-5-5-5h-.171A3.006 3.006 0 0 0 13 0h-2a3.006 3.006 0 0 0-2.829 2H8C5.243 2 3 4.243 3 7v12c0 2.757 2.243 5 5 5h8c2.757 0 5-2.243 5-5ZM9 4c.552 0 1-.448 1-1s.449-1 1-1h2c.551 0 1 .449 1 1s.448 1 1 1h1c1.654 0 3 1.346 3 3v12c0 1.654-1.346 3-3 3H8c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h1ZM8 15a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm1.834-3.477 1.862-1.805a.999.999 0 1 0-1.392-1.436l-1.64 1.59-.811-.766a1 1 0 1 0-1.373 1.455l1.008.951c.314.315.733.488 1.178.488s.864-.173 1.167-.477Z" />
    </svg>
  );
});

ClipboardListCheck.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ClipboardListCheck.displayName = 'ClipboardListCheck';

export default ClipboardListCheck;
