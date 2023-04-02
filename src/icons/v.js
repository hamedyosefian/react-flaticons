import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const V = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M12 24.011c-1.872 0-3.46-1.083-4.144-2.825L.069 1.365A1 1 0 0 1 1.93.634l7.787 19.82c.924 2.103 3.641 2.104 4.565 0L22.069.635a1 1 0 1 1 1.861.731l-7.787 19.82c-.684 1.742-2.272 2.825-4.144 2.825Z" />
    </svg>
  );
});

V.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

V.displayName = 'V';

export default V;
