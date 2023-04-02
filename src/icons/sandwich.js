import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Sandwich = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M21 18H3a3 3 0 0 0 0 6h18a3 3 0 0 0 0-6Zm0 4H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2Zm1.8-16.626-3.113-3.627a4.97 4.97 0 0 0-5.8-1.328L3 5.184a5 5 0 0 0-3 4.581A3.024 3.024 0 0 0 3 13h18a3 3 0 0 0 3-3 6.169 6.169 0 0 0-1.2-4.626Zm-8.112-3.123a2.987 2.987 0 0 1 3.48.8c.092.126 3.395 3.909 3.341 3.952H3.834ZM22 10a1 1 0 0 1-1 1H3c-1.051 0-1.139-1.224-.895-2H22Zm2 6a.99.99 0 0 1-1.584.79l-.011.014c-.386-.255-1.284-1.224-1.96-.638a4.011 4.011 0 0 1-4.889 0 .944.944 0 0 0-1.111 0 4.061 4.061 0 0 1-4.889 0 .942.942 0 0 0-1.111 0 4.061 4.061 0 0 1-4.889 0c-.67-.589-1.589.389-1.961.637l-.011-.014A.982.982 0 0 1 .416 15.21l-.011-.01s.573-.423.816-.612a2.946 2.946 0 0 1 3.558 0 2.031 2.031 0 0 0 2.443 0 2.946 2.946 0 0 1 3.557 0 2.031 2.031 0 0 0 2.443 0 2.946 2.946 0 0 1 3.557 0 2.031 2.031 0 0 0 2.443 0 2.946 2.946 0 0 1 3.557 0c.243.189.815.611.816.612l-.011.014A.982.982 0 0 1 24 16Z" />
    </svg>
  );
});

Sandwich.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Sandwich.displayName = 'Sandwich';

export default Sandwich;
