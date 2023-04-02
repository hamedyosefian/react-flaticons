import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const WagonCovered = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M23.239 1.465A2.69 2.69 0 0 0 20.81.682l-.41.083A12.043 12.043 0 0 1 19 1c-1 0-1.991-1-3-1s-2.5 1-4 1-3.012-1-4.006-1S6 1 5 1A12.043 12.043 0 0 1 3.605.765L3.192.683a2.683 2.683 0 0 0-2.431.782 2.711 2.711 0 0 0-.695 2.483L2 13.105V20a4.005 4.005 0 0 0 7.873 1h4.254A4.005 4.005 0 0 0 22 20v-6.895l1.93-9.139a2.719 2.719 0 0 0-.691-2.501ZM2.2 2.85a.677.677 0 0 1 .621-.2l.377.076A4.77 4.77 0 0 0 7 2.457V9a1 1 0 0 0 2 0V2.3a8.347 8.347 0 0 0 3 .7 8.347 8.347 0 0 0 3-.7V9a1 1 0 0 0 2 0V2.457a4.766 4.766 0 0 0 3.8.267l.379-.077a.666.666 0 0 1 .619.2.732.732 0 0 1 .181.684L20.189 12H3.811L2.02 3.517a.72.72 0 0 1 .18-.667ZM14.127 19H9.873A4.032 4.032 0 0 0 4 16.537V14h16v2.537A4.032 4.032 0 0 0 14.127 19ZM6 22a2 2 0 0 1 0-4 2 2 0 0 1 0 4Zm12 0a2 2 0 0 1 0-4 2 2 0 0 1 0 4Z" />
    </svg>
  );
});

WagonCovered.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

WagonCovered.displayName = 'WagonCovered';

export default WagonCovered;
