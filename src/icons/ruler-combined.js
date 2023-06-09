import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const RulerCombined = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M20 14H10V4c0-2.206-1.794-4-4-4H4C1.794 0 0 1.794 0 4v15c0 2.757 2.243 5 5 5h15c2.206 0 4-1.794 4-4v-2c0-2.206-1.794-4-4-4Zm2 6c0 1.103-.897 2-2 2H5c-1.654 0-3-1.346-3-3V4c0-1.103.897-2 2-2h2c1.103 0 2 .897 2 2v2H6a1 1 0 1 0 0 2h2v2H6a1 1 0 1 0 0 2h2v2H6a1 1 0 1 0 0 2h2v2a1 1 0 1 0 2 0v-2h2v2a1 1 0 1 0 2 0v-2h2v2a1 1 0 1 0 2 0v-2h2c1.103 0 2 .897 2 2v2Z" />
    </svg>
  );
});

RulerCombined.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

RulerCombined.displayName = 'RulerCombined';

export default RulerCombined;
