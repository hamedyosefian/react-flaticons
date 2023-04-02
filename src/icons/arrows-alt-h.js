import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const ArrowsAltH = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="m23.768 12.552-4.418 4.361c-.498.492-1.35.143-1.35-.552V13H6v3.361c0 .695-.852 1.044-1.35.552L.232 12.552a.773.773 0 0 1 0-1.104L4.65 7.087C5.148 6.595 6 6.944 6 7.639V11h12V7.639c0-.695.852-1.044 1.35-.552l4.418 4.361a.773.773 0 0 1 0 1.104Z" />
    </svg>
  );
});

ArrowsAltH.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowsAltH.displayName = 'ArrowsAltH';

export default ArrowsAltH;
