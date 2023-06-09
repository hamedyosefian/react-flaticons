import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const SortAlphaDownAlt = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M15 1a1 1 0 0 1 1-1h4.112a1.888 1.888 0 0 1 1.598 2.887.9.9 0 0 1-.103.136l-4.449 4.978h3.841a1 1 0 1 1 0 2h-4.112a1.886 1.886 0 0 1-1.599-2.886c.03-.049 4.553-5.114 4.553-5.114H16a1 1 0 0 1-1-1Zm7 16.5V23a1 1 0 1 1-2 0v-2h-3v2a1 1 0 1 1-2 0v-5.5c0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5ZM20 19v-1.5c0-.827-.673-1.5-1.5-1.5s-1.5.673-1.5 1.5V19h3Zm-9.707-1.293L7 21V1a1 1 0 1 0-2 0v20l-3.293-3.293a.999.999 0 1 0-1.414 1.414l4.293 4.293c.39.39.902.585 1.414.585s1.024-.195 1.414-.585l4.293-4.293a.999.999 0 1 0-1.414-1.414Z" />
    </svg>
  );
});

SortAlphaDownAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SortAlphaDownAlt.displayName = 'SortAlphaDownAlt';

export default SortAlphaDownAlt;
