import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Turkey = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M19.85 10.755a5.038 5.038 0 0 0-.17-3.03c.038-.012 1.482-1.481 1.513-1.5a1.5 1.5 0 1 0 .649-2.063 1.5 1.5 0 1 0-2.063.649c-.015.022-1.5 1.482-1.5 1.507-1.424-.764-4.375 0-6.134.964C6.193 5.8.029 9.471 0 16v2.568a5.026 5.026 0 0 0 4.3 4.951C10.447 24.5 23.753 24.34 24 18c0-2.447-1.552-5.133-4.15-7.245Zm-5.207-2.367c1.435-.481 2.635-.516 3.06-.092.965.965-.563 5.139-2.181 6.757C12.461 18 8 13.538 10.947 10.478a10.574 10.574 0 0 1 3.696-2.09ZM9 22a36.975 36.975 0 0 1-4.419-.461A3.015 3.015 0 0 1 2 18.568V16a6.956 6.956 0 0 1 7.571-6.97c-5.795 6.95 5.914 14.078 9.632 3.8C26.5 20.17 18.3 21.918 9 22ZM7 3V1a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0Zm4 0V1a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0ZM3 3V1a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0Z" />
    </svg>
  );
});

Turkey.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Turkey.displayName = 'Turkey';

export default Turkey;
