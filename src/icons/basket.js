import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Basket = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M19 0H5a5.006 5.006 0 0 0-5 5v8a5.007 5.007 0 0 0 4.616 4.985L5 21.062V23a1 1 0 0 0 2 0v-1h2v1a1 1 0 0 0 2 0v-1h2v1a1 1 0 0 0 2 0v-1h2v1a1 1 0 0 0 2 0v-1.774c.008-.034.4-3.242.4-3.242A5.007 5.007 0 0 0 24 13V5a5.006 5.006 0 0 0-5-5ZM6.273 15.124A1 1 0 0 1 7.266 14H9v2H6.383ZM13 14v2h-2v-2Zm3.742 0a1 1 0 0 1 .992 1.121l-.107.879H15v-2Zm-9.859 6-.25-2H9v2ZM11 20v-2h2v2Zm4-2h2.384l-.244 2H15Zm7-5a3 3 0 0 1-2.349 2.928l.069-.566A3 3 0 0 0 16.742 12H7.266a3 3 0 0 0-2.977 3.372l.07.558A3 3 0 0 1 2 13V5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3Zm-4-5v1a1 1 0 0 1-2 0V8a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v1a1 1 0 0 1-2 0V8a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3Z" />
    </svg>
  );
});

Basket.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Basket.displayName = 'Basket';

export default Basket;
