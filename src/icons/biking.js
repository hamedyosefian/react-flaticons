import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Biking = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M5 23a5 5 0 1 1 5-5 5.006 5.006 0 0 1-5 5Zm0-8a3 3 0 1 0 3 3 3 3 0 0 0-3-3Zm14 8a5 5 0 1 1 5-5 5.006 5.006 0 0 1-5 5Zm0-8a3 3 0 1 0 3 3 3 3 0 0 0-3-3Zm-6 3v-4a1 1 0 0 0-.349-.758l-2.286-1.965a.986.986 0 0 1-.348-.743.97.97 0 0 1 .274-.71l1.963-1.562a1.007 1.007 0 0 1 1.418.067l2.6 2.4a1 1 0 0 0 .679.266H20a1 1 0 0 0 0-2h-2.66l-2.277-2.103a2.973 2.973 0 0 0-4.105-.152L8.994 8.3a3 3 0 0 0 .068 4.491L11 14.459V18a1 1 0 0 0 2 0Zm3.5-17A2.5 2.5 0 1 0 19 3.5 2.5 2.5 0 0 0 16.5 1Z" />
    </svg>
  );
});

Biking.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Biking.displayName = 'Biking';

export default Biking;
