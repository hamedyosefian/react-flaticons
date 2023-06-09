import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const SadTear = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M10 9.5a1.5 1.5 0 0 1-3 0 1.5 1.5 0 0 1 3 0ZM15.5 8a1.5 1.5 0 0 0 0 3 1.5 1.5 0 0 0 0-3Zm8.5 4A12.013 12.013 0 0 0 12 0C-3.9.6-3.893 23.4 12 24a12.013 12.013 0 0 0 12-12Zm-2 0a10.011 10.011 0 0 1-10 10C-1.249 21.5-1.244 2.5 12 2a10.011 10.011 0 0 1 10 10Zm-4.254 5.666a1 1 0 0 0-.08-1.412A9.454 9.454 0 0 0 12 14a1 1 0 0 0 0 2 7.519 7.519 0 0 1 4.336 1.747 1 1 0 0 0 1.41-.081ZM5 16a2 2 0 0 0 4 0 6.571 6.571 0 0 0-1.538-3.388C6.46 11.512 4.953 15.152 5 16Z" />
    </svg>
  );
});

SadTear.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SadTear.displayName = 'SadTear';

export default SadTear;
