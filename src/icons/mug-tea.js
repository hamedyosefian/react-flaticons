import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const MugTea = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M20.552 12.139C21.149 9.563 21.6 6.247 18 6H9.009C8.992 5.991 3.023 6.008 3 6a3.035 3.035 0 0 0-2.245.981 2.931 2.931 0 0 0-.747 2.28 31.916 31.916 0 0 0 3.136 10.805A6.976 6.976 0 0 0 9.437 24h2.127a6.955 6.955 0 0 0 5.736-3H19c5.091.162 7.377-7.84 1.552-8.861Zm-12.258.982L9 12.414c.316.363 1.055.86 1 1.415V15.5a.5.5 0 0 1-.5.5c-.431-.046-1.508.219-1.5-.5.061-.533-.2-1.991.294-2.379ZM11.564 22H9.437a4.992 4.992 0 0 1-4.5-2.817A29.9 29.9 0 0 1 2 9.067.972.972 0 0 1 3 8h5v2.585c-.872.857-2.1 1.887-2 3.243V15.5A2.5 2.5 0 0 0 8.5 18h1a2.5 2.5 0 0 0 2.5-2.5v-1.671c.1-1.353-1.127-2.39-2-3.243V8h8a1.012 1.012 0 0 1 .763.326.947.947 0 0 1 .238.74 29.868 29.868 0 0 1-2.936 10.114A4.989 4.989 0 0 1 11.564 22ZM19 19h-.643a32.94 32.94 0 0 0 1.743-4.91c1.891.325 1.9 1.457 1.9 1.91a3 3 0 0 1-3 3ZM9.026 3V1a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0Zm4 0V1a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0Zm-8 0V1a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0Z" />
    </svg>
  );
});

MugTea.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MugTea.displayName = 'MugTea';

export default MugTea;
