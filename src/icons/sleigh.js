import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Sleigh = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M19 17a5.006 5.006 0 0 0 5-5V9a3 3 0 0 0-6 0h-4.754a3 3 0 0 1-2.91-2.272l-.485-1.941A4.993 4.993 0 0 0 5 1H4a4 4 0 0 0-4 4v7a5.006 5.006 0 0 0 5 5h1v4H1a1 1 0 0 0 0 2h19a4 4 0 0 0 4-4 1 1 0 0 0-2 0 2 2 0 0 1-2 2h-2v-4ZM2 12V5a2 2 0 0 1 2-2h1a3 3 0 0 1 2.91 2.272l.49 1.941A4.991 4.991 0 0 0 13.246 11H18a2 2 0 0 0 2-2 1 1 0 0 1 2 0v3a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Zm14 9H8v-4h8Z" />
    </svg>
  );
});

Sleigh.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Sleigh.displayName = 'Sleigh';

export default Sleigh;
