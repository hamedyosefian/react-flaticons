import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const GrinTongue = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M12 0A12.013 12.013 0 0 0 0 12c.6 15.9 23.4 15.893 24 0A12.013 12.013 0 0 0 12 0Zm0 22A10.011 10.011 0 0 1 2 12c.5-13.248 19.5-13.244 20 0a10.011 10.011 0 0 1-10 10Zm5-8H7a1 1 0 0 0 0 2h2v.6c.133 4.495 5.869 4.49 6 0V16h2a1 1 0 0 0 0-2Zm-4 2.6c-.062 1.839-1.938 1.837-2 0V16h2ZM7 9.5a1.5 1.5 0 0 1 3 0 1.5 1.5 0 0 1-3 0Zm7 0a1.5 1.5 0 0 1 3 0 1.5 1.5 0 0 1-3 0Z" />
    </svg>
  );
});

GrinTongue.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

GrinTongue.displayName = 'GrinTongue';

export default GrinTongue;
