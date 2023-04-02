import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Stamp = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M21 24H3a1 1 0 0 1 0-2h18a1 1 0 1 1 0 2Zm3-6c0-2.757-2.243-5-5-5h-3a.993.993 0 0 1-.766-.356.99.99 0 0 1-.22-.813c.58-3.334.985-6.555.985-7.831 0-2.206-1.794-4-4-4s-4 1.794-4 4c0 1.278.405 4.498.985 7.831a.983.983 0 0 1-.219.812.988.988 0 0 1-.766.357h-3c-2.757 0-5 2.243-5 5 0 .97.701 2 2 2H22c1.299 0 2-1.03 2-2ZM8 15c.888 0 1.725-.39 2.296-1.07a2.99 2.99 0 0 0 .659-2.442C10.401 8.307 9.999 5.157 9.999 4c0-1.103.897-2 2-2s2 .897 2 2c0 1.156-.402 4.305-.956 7.488a2.994 2.994 0 0 0 .66 2.443A2.995 2.995 0 0 0 15.999 15h3c1.654 0 3 1.346 3 3H2c0-1.654 1.346-3 3-3h3Z" />
    </svg>
  );
});

Stamp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Stamp.displayName = 'Stamp';

export default Stamp;
