import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const ReplyAll = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M19 8H8.554l6.223-6.224A.999.999 0 1 0 13.363.362L6.172 7.554a2.001 2.001 0 0 0 0 2.828l7.191 7.19a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L8.618 10H19c1.654 0 3 1.346 3 3v10a1 1 0 1 0 2 0V13c0-2.757-2.243-5-5-5Z" />
      <path d="M2.586 10.312a2.003 2.003 0 0 1 0-2.829l5.776-5.776A.999.999 0 1 0 6.948.293L1.172 6.069a4.004 4.004 0 0 0 0 5.657l5.776 5.776a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414l-5.776-5.776Z" />
    </svg>
  );
});

ReplyAll.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ReplyAll.displayName = 'ReplyAll';

export default ReplyAll;
