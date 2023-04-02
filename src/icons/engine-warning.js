import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const EngineWarning = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M12 4a8.009 8.009 0 0 0-8 8c.376 10.588 15.626 10.585 16 0a8.009 8.009 0 0 0-8-8Zm0 14c-7.929-.252-7.928-11.749 0-12 7.929.252 7.928 11.749 0 12Zm1-9v3a1 1 0 0 1-2 0V9a1 1 0 0 1 2 0Zm11 3a12.026 12.026 0 0 1-2.743 7.637 1 1 0 0 1-1.543-1.274 10.052 10.052 0 0 0 0-12.726 1 1 0 0 1 1.543-1.274A12.026 12.026 0 0 1 24 12ZM4.286 18.363a1 1 0 0 1-1.542 1.274 12.065 12.065 0 0 1 0-15.274 1 1 0 0 1 1.542 1.274 10.052 10.052 0 0 0 0 12.726ZM13 15a1 1 0 0 1-2 0 1 1 0 0 1 2 0Z" />
    </svg>
  );
});

EngineWarning.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

EngineWarning.displayName = 'EngineWarning';

export default EngineWarning;
