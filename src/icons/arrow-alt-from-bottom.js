import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const ArrowAltFromBottom = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M20 22h-7V6h3.361c.695 0 1.044-.852.552-1.35L12.552.232a.773.773 0 0 0-1.104 0L7.087 4.65C6.595 5.148 6.944 6 7.639 6H11v16H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2Z" />
    </svg>
  );
});

ArrowAltFromBottom.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowAltFromBottom.displayName = 'ArrowAltFromBottom';

export default ArrowAltFromBottom;
