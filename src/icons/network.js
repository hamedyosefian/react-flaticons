import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Network = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M23 20h-8.184A3 3 0 0 0 13 18.184V14h6a2.989 2.989 0 0 0 2-5.22V4a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v4.78A2.989 2.989 0 0 0 5 14h6v4.184A3 3 0 0 0 9.184 20H1a1 1 0 0 0 0 2h8.184a2.982 2.982 0 0 0 5.632 0H23a1 1 0 0 0 0-2ZM5 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4h-3.586A1.986 1.986 0 0 0 14 8.586L13.586 9h-3.172L10 8.586A1.986 1.986 0 0 0 8.586 8H5Zm-1 7a1 1 0 0 1 1-1h3.586l.414.414a1.986 1.986 0 0 0 1.414.586h3.172A1.986 1.986 0 0 0 15 10.414l.414-.414H19a1 1 0 0 1 0 2H5a1 1 0 0 1-1-1Zm8 11a1 1 0 1 1 1-1 1 1 0 0 1-1 1Z" />
    </svg>
  );
});

Network.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Network.displayName = 'Network';

export default Network;
