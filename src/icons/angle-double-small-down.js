import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const AngleDoubleSmallDown = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M12 19a3.904 3.904 0 0 1-2.778-1.151l-3.925-3.875a1 1 0 1 1 1.405-1.423l3.929 3.88c.737.737 2.003.733 2.731.004l3.935-3.884a.999.999 0 1 1 1.404 1.423l-3.93 3.88A3.892 3.892 0 0 1 11.999 19Zm.706-5.327 5.999-5.964a.999.999 0 0 0 .004-1.414.997.997 0 0 0-1.414-.004l-5.294 5.263-5.296-5.263a1.003 1.003 0 0 0-1.415.004 1.002 1.002 0 0 0 .004 1.415l6.001 5.964a.997.997 0 0 0 1.41 0Z" />
    </svg>
  );
});

AngleDoubleSmallDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

AngleDoubleSmallDown.displayName = 'AngleDoubleSmallDown';

export default AngleDoubleSmallDown;
