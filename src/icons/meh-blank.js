import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const MehBlank = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M10 9.5a1.5 1.5 0 0 1-3 0 1.5 1.5 0 0 1 3 0ZM15.5 8a1.5 1.5 0 0 0 0 3 1.5 1.5 0 0 0 0-3Zm8.5 4a12.013 12.013 0 0 1-12 12C-3.9 23.4-3.894.6 12 0a12.013 12.013 0 0 1 12 12Zm-2 0A10.011 10.011 0 0 0 12 2c-13.248.5-13.244 19.5 0 20a10.011 10.011 0 0 0 10-10Z" />
    </svg>
  );
});

MehBlank.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MehBlank.displayName = 'MehBlank';

export default MehBlank;
