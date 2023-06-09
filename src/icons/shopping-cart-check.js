import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const ShoppingCartCheck = forwardRef(({ color, size, ...rest }, ref) => {
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
      <circle cx="7" cy="22" r="2" />
      <circle cx="17" cy="22" r="2" />
      <path d="M23.685 1.336a1 1 0 0 0-1.414 0L17.112 6.5l-1.551-1.619a1 1 0 0 0-1.442 1.386l1.614 1.679a1.872 1.872 0 0 0 1.345.6h.033a1.873 1.873 0 0 0 1.335-.553l5.239-5.243a1 1 0 0 0 0-1.414Z" />
      <path d="M21.9 9.016a1 1 0 0 0-1.162.807l-.128.709A3 3 0 0 1 17.657 13H5.418l-.94-8H11a1 1 0 0 0 0-2H4.242L4.2 2.648A3 3 0 0 0 1.222 0H1a1 1 0 0 0 0 2h.222a1 1 0 0 1 .993.883l1.376 11.7A5 5 0 0 0 8.557 19H19a1 1 0 0 0 0-2H8.557a3 3 0 0 1-2.829-2h11.929a5 5 0 0 0 4.921-4.113l.128-.71a1 1 0 0 0-.806-1.161Z" />
    </svg>
  );
});

ShoppingCartCheck.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ShoppingCartCheck.displayName = 'ShoppingCartCheck';

export default ShoppingCartCheck;
