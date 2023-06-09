import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Cream = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M22 12.184V11a3 3 0 0 0-2-2.816A14.458 14.458 0 0 0 18.15.809a1.948 1.948 0 0 0-1.717-.818 2.035 2.035 0 0 0-1.664 1.074C14 2.476 13.24 3 11.962 3H10a5.676 5.676 0 0 0-5.939 5.165A3 3 0 0 0 2 11v1.184A3 3 0 0 0 0 15v4a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5v-4a3 3 0 0 0-2-2.816ZM10 5h1.962a4.952 4.952 0 0 0 4.566-3.022A12.409 12.409 0 0 1 18 8H6.131A3.658 3.658 0 0 1 10 5Zm-6 6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v1H4Zm18 8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1Z" />
    </svg>
  );
});

Cream.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Cream.displayName = 'Cream';

export default Cream;
