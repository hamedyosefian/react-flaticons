import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const M = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M23 24a1 1 0 0 1-1-1V3.486c0-.861-.587-1.306-1.137-1.436-.548-.13-1.273.006-1.658.776l-6.311 12.621c-.339.678-1.45.678-1.789 0l-6.31-12.62c-.385-.771-1.109-.906-1.659-.776C2.587 2.181 2 2.626 2 3.487V23c-.006 1.308-1.995 1.307-2 0V3.486C0 1.841 1.076.482 2.677.104c1.601-.379 3.171.357 3.907 1.828L12 12.764l5.416-10.832C18.151.46 19.723-.277 21.323.104 22.924.482 24 1.841 24 3.486V23a1 1 0 0 1-1 1Z" />
    </svg>
  );
});

M.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

M.displayName = 'M';

export default M;
