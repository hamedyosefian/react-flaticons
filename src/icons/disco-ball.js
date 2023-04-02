import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const DiscoBall = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M13 4.051V2h2a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2h2v2.051a10 10 0 1 0 2 0Zm3 11.619v-3.34c2.634.468 4 1.308 4 1.67s-1.366 1.2-4 1.67ZM4 14c0-.362 1.366-1.2 4-1.67v3.34C5.366 15.2 4 14.362 4 14Zm6-1.922a25.354 25.354 0 0 1 4 0v3.844a25.354 25.354 0 0 1-4 0ZM12 6a7.953 7.953 0 0 1 2 .263v3.812c-.664-.049-1.335-.075-2-.075s-1.336.026-2 .075V6.263A7.953 7.953 0 0 1 12 6Zm7.5 5.236A14.946 14.946 0 0 0 16 10.3V7.082a8.042 8.042 0 0 1 3.5 4.154ZM8 7.082V10.3a14.946 14.946 0 0 0-3.5.933A8.042 8.042 0 0 1 8 7.082Zm-3.5 9.682A14.946 14.946 0 0 0 8 17.7v3.221a8.042 8.042 0 0 1-3.5-4.157Zm5.5 4.973v-3.812c.664.049 1.335.075 2 .075s1.336-.026 2-.075v3.812a7.736 7.736 0 0 1-4 0Zm6-.819V17.7a14.946 14.946 0 0 0 3.5-.933 8.042 8.042 0 0 1-3.5 4.151Z" />
    </svg>
  );
});

DiscoBall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

DiscoBall.displayName = 'DiscoBall';

export default DiscoBall;
