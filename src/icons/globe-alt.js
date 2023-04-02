import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const GlobeAlt = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M13 16a8 8 0 1 0-8-8 8.009 8.009 0 0 0 8 8zm0-14a6 6 0 1 1-6 6 6.006 6.006 0 0 1 6-6zm9.907 12.773A11.992 11.992 0 0 1 14 19.939V22h4a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2h4v-2.051A11.994 11.994 0 0 1 3.743.363a1 1 0 0 1 1.542 1.274 10 10 0 1 0 15.971 12.006 1 1 0 0 1 1.651 1.13z" />
    </svg>
  );
});

GlobeAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

GlobeAlt.displayName = 'GlobeAlt';

export default GlobeAlt;
