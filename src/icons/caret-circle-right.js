import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const CaretCircleRight = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M24 12A12 12 0 1 1 12 0a12.013 12.013 0 0 1 12 12ZM2 12A10 10 0 1 0 12 2 10.011 10.011 0 0 0 2 12Zm9.6 5.731 5.154-5.087a.9.9 0 0 0 0-1.288L11.6 6.269a.924.924 0 0 0-1.575.644v10.174a.924.924 0 0 0 1.575.644Z" />
    </svg>
  );
});

CaretCircleRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CaretCircleRight.displayName = 'CaretCircleRight';

export default CaretCircleRight;
