import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const CommentCode = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M14.881 17a.999.999 0 0 1-.707-1.707l2.536-2.536a1 1 0 0 0 0-1.414l-2.636-2.636a.999.999 0 1 1 1.414-1.414l2.636 2.636c.565.565.876 1.318.876 2.121s-.312 1.556-.876 2.121l-2.536 2.536a.997.997 0 0 1-.707.293ZM24 19v-6.66C24 5.861 19.096.454 12.836.029a12.018 12.018 0 0 0-9.327 3.492A12.022 12.022 0 0 0 .03 12.854C.47 19.208 6.082 24 13.084 24h5.917c2.757 0 5-2.243 5-5ZM12.701 2.024C17.916 2.378 22 6.909 22 12.34V19c0 1.654-1.346 3-3 3h-5.917c-6.035 0-10.686-3.905-11.059-9.285a10.024 10.024 0 0 1 2.899-7.782 10.019 10.019 0 0 1 7.777-2.91ZM9.826 16.707a.999.999 0 0 0 0-1.414l-2.535-2.536a1 1 0 0 1 0-1.414l2.636-2.636a.999.999 0 1 0-1.414-1.414L5.877 9.929c-.565.565-.876 1.318-.876 2.121s.312 1.556.876 2.121l2.535 2.536a.997.997 0 0 0 1.414 0Z" />
    </svg>
  );
});

CommentCode.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CommentCode.displayName = 'CommentCode';

export default CommentCode;
