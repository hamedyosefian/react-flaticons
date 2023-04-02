import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const WomanHead = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M14.5 13a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5Zm9.425 5.144A5 5 0 0 1 19 24h-4a1 1 0 0 1-1-1v-2.263A7.959 7.959 0 0 1 12 21a7.84 7.84 0 0 1-2-.27V23a1 1 0 0 1-1 1H5a5 5 0 0 1-4.925-5.856l.3-1.74a2.939 2.939 0 0 1 5.337-1.138C6.976 17.124 9.409 19 12 19c3.13 0 6.214-2.779 7.13-5.376a1.03 1.03 0 0 1 .959-.667l.432.007A1.461 1.461 0 0 0 22 11.5a1.5 1.5 0 0 0-1.23-1.474 1 1 0 0 1-.816-.879A7.977 7.977 0 0 0 12 2C6.423 2 4.892 5.628 3.662 8.544c-.224.527-.435 1.03-.662 1.483a13.354 13.354 0 0 0 10.186-5.608 1 1 0 0 1 1.628 1.162 15.089 15.089 0 0 1-4.956 4.467 1.5 1.5 0 1 1-1.725.84 15.807 15.807 0 0 1-7.257 1.1A1 1 0 0 1 .5 10.136a6.372 6.372 0 0 0 1.319-2.369C3.124 4.674 5.1 0 12 0a9.972 9.972 0 0 1 9.85 8.274A3.5 3.5 0 0 1 24 11.5a3.428 3.428 0 0 1-.854 2.257c.007.026.025.047.03.075ZM8 19.94a11.088 11.088 0 0 1-3.941-3.552.946.946 0 0 0-.783-.424h-.017a.945.945 0 0 0-.911.782l-.3 1.739A3 3 0 0 0 5 22h3Zm13.955-1.455-.628-3.613a3.384 3.384 0 0 1-.579.086A11.033 11.033 0 0 1 16 19.952V22h3a3 3 0 0 0 2.955-3.514Z" />
    </svg>
  );
});

WomanHead.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

WomanHead.displayName = 'WomanHead';

export default WomanHead;
