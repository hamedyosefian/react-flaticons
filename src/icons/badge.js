import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Badge = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M20 8a8 8 0 1 0-14 5.274V21.5a2.5 2.5 0 0 0 4.062 1.952l1.626-1.3a.5.5 0 0 1 .624 0l1.626 1.3A2.5 2.5 0 0 0 18 21.5v-8.226A7.957 7.957 0 0 0 20 8zm-8-6a6 6 0 1 1-6 6 6.006 6.006 0 0 1 6-6zm3.717 19.948a.491.491 0 0 1-.529-.06l-1.626-1.3a2.49 2.49 0 0 0-3.124 0l-1.625 1.3A.5.5 0 0 1 8 21.5v-6.582a7.935 7.935 0 0 0 8 0V21.5a.487.487 0 0 1-.283.448z" />
    </svg>
  );
});

Badge.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Badge.displayName = 'Badge';

export default Badge;
