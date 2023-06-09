import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const MugAlt = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M19 23a1 1 0 0 1-1 1H1a1 1 0 0 1 0-2h17a1 1 0 0 1 1 1Zm5-15c0 2.774-2.185 6-5 6h-1.612l-.3 1.821A4.984 4.984 0 0 1 12.152 20h-5.3a4.984 4.984 0 0 1-4.932-4.179L.056 4.657A4 4 0 0 1 4 0h11a3.968 3.968 0 0 1 3.983 4H19c3.131 0 5 1.5 5 4Zm-7.028-3.671A2 2 0 0 0 15 2H4a2 2 0 0 0-1.972 2.328l1.861 11.165A2.991 2.991 0 0 0 6.848 18h5.3a2.991 2.991 0 0 0 2.959-2.507ZM22 8c0-.5 0-2-3-2h-.279l-1 6H19c1.545 0 3-2.254 3-4Z" />
    </svg>
  );
});

MugAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MugAlt.displayName = 'MugAlt';

export default MugAlt;
