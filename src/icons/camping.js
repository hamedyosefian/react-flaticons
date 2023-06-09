import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Camping = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M5.005 24H19a5 5 0 0 0 4.522-7.132L16.535 2.9a5 5 0 0 0-9.057-.026l-7 14-.008.026A5 5 0 0 0 5.005 24Zm3.4-2 2.717-5.438A.958.958 0 0 1 12 16a.973.973 0 0 1 .893.588L15.6 22Zm-6.127-4.252 7-14.012a3 3 0 0 1 5.454.027l6.988 13.973A3 3 0 0 1 19 22h-1.164L14.7 15.72a2.971 2.971 0 0 0-5.377-.027L6.168 22H5.005a3 3 0 0 1-2.727-4.252Z" />
    </svg>
  );
});

Camping.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Camping.displayName = 'Camping';

export default Camping;
