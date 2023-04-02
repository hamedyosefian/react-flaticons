import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const BowlingPins = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M9 8a11.618 11.618 0 0 1 .554-2.175A7.168 7.168 0 0 0 10 4a4 4 0 0 0-8 0 7.168 7.168 0 0 0 .446 1.825A11.618 11.618 0 0 1 3 8a8.433 8.433 0 0 1-1.264 3.536A11.789 11.789 0 0 0 0 17a11.08 11.08 0 0 0 .986 4.7A4 4 0 0 0 4.61 24h2.78a4 4 0 0 0 3.624-2.3A11.08 11.08 0 0 0 12 17a11.789 11.789 0 0 0-1.736-5.464A8.433 8.433 0 0 1 9 8ZM6 2a2 2 0 0 1 2 1.973 12 12 0 0 1-.355 1.253A10.708 10.708 0 0 0 7 8H5a10.708 10.708 0 0 0-.646-2.774C4.211 4.772 4.016 4.15 4 4a2 2 0 0 1 2-2Zm3.2 18.856A2 2 0 0 1 7.39 22H4.61a2 2 0 0 1-1.81-1.143A9.092 9.092 0 0 1 2 17a10.092 10.092 0 0 1 1.512-4.542A18.366 18.366 0 0 0 4.637 10h2.726a18.366 18.366 0 0 0 1.125 2.458A10.092 10.092 0 0 1 10 17a9.084 9.084 0 0 1-.8 3.856Zm13.064-9.32A8.433 8.433 0 0 1 21 8a11.618 11.618 0 0 1 .554-2.175A7.168 7.168 0 0 0 22 4a4 4 0 0 0-8 0 7.168 7.168 0 0 0 .446 1.825A11.618 11.618 0 0 1 15 8a8.433 8.433 0 0 1-1.264 3.536A11.789 11.789 0 0 0 12 17a11.08 11.08 0 0 0 .986 4.7A4 4 0 0 0 16.61 24h2.78a4 4 0 0 0 3.624-2.3A11.08 11.08 0 0 0 24 17a11.789 11.789 0 0 0-1.736-5.464ZM18 2a2 2 0 0 1 2 1.973 12 12 0 0 1-.355 1.253A10.708 10.708 0 0 0 19 8h-2a10.708 10.708 0 0 0-.646-2.774C16.211 4.772 16.016 4.15 16 4a2 2 0 0 1 2-2Zm3.2 18.856A2 2 0 0 1 19.39 22h-2.78a2 2 0 0 1-1.81-1.143A9.092 9.092 0 0 1 14 17a10.092 10.092 0 0 1 1.512-4.542A18.366 18.366 0 0 0 16.637 10h2.726a18.366 18.366 0 0 0 1.125 2.458A10.092 10.092 0 0 1 22 17a9.084 9.084 0 0 1-.8 3.856Z" />
    </svg>
  );
});

BowlingPins.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BowlingPins.displayName = 'BowlingPins';

export default BowlingPins;
