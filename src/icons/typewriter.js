import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Typewriter = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M17 19a1 1 0 0 1-1 1H8a1 1 0 1 1 0-2h8a1 1 0 0 1 1 1Zm7-10a1 1 0 0 1-1 1h-1v9c0 2.757-2.243 5-5 5H7c-2.757 0-5-2.243-5-5v-9H1a1 1 0 1 1 0-2h1.184A2.997 2.997 0 0 1 4 6.184V4.5C4 2.019 6.019 0 8.5 0h7C17.981 0 20 2.019 20 4.5v1.684A2.997 2.997 0 0 1 21.816 8H23a1 1 0 0 1 1 1ZM6 4.5V6h4a1 1 0 1 1 0 2H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2h-1a1 1 0 1 1 0-2h4V4.5C18 3.121 16.879 2 15.5 2h-7A2.502 2.502 0 0 0 6 4.5ZM20 9a1 1 0 0 0-1-1h-1.184c.112.314.184.648.184 1 0 1.654-1.346 3-3 3H9c-1.654 0-3-1.346-3-3 0-.352.072-.686.184-1H5a1 1 0 0 0-1 1v10c0 1.654 1.346 3 3 3h10c1.654 0 3-1.346 3-3V9ZM7.5 16.5a1.5 1.5 0 1 0-.001-3.001A1.5 1.5 0 0 0 7.5 16.5Zm4.5 0a1.5 1.5 0 1 0-.001-3.001A1.5 1.5 0 0 0 12 16.5Zm4.5-3a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 16.5 13.5Z" />
    </svg>
  );
});

Typewriter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Typewriter.displayName = 'Typewriter';

export default Typewriter;
