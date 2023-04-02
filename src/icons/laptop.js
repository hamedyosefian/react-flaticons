import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Laptop = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M22 15.184V8a5.006 5.006 0 0 0-5-5H7a5.006 5.006 0 0 0-5 5v7.184A2.993 2.993 0 0 0 3 21h18a2.993 2.993 0 0 0 1-5.816ZM7 5h10a3 3 0 0 1 3 3v7h-4.151a2 2 0 0 0-1.528.708l-.247.292H9.925l-.246-.292A2 2 0 0 0 8.151 15H4V8a3 3 0 0 1 3-3Zm14 14H3a1 1 0 0 1 0-2h5.152l.246.292A2 2 0 0 0 9.925 18h4.149a2 2 0 0 0 1.528-.708l.247-.292H21a1 1 0 0 1 0 2Z" />
    </svg>
  );
});

Laptop.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Laptop.displayName = 'Laptop';

export default Laptop;
