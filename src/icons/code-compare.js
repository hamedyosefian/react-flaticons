import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const CodeCompare = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M24 5c0-2.206-1.794-4-4-4s-4 1.794-4 4a4.007 4.007 0 0 0 3 3.873V15c0 1.654-1.346 3-3 3h-3.369l2.203-2.203a.999.999 0 1 0-1.414-1.414l-2.541 2.541C10.33 17.472 10 18 10 19s.297 1.585.879 2.167l2.541 2.541a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414l-2.293-2.293H16c2.757 0 5-2.243 5-5V8.874a4.007 4.007 0 0 0 3-3.873Zm-4 2c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2Zm-6.796.122c.567-.567.879-1.32.879-2.122s-.312-1.555-.879-2.121L10.663.338a.999.999 0 1 0-1.414 1.414L11.496 4H8C5.243 4 3 6.243 3 9v6.127A4.007 4.007 0 0 0 0 19c0 2.206 1.794 4 4 4s4-1.794 4-4a4.007 4.007 0 0 0-3-3.873V9c0-1.654 1.346-3 3-3h3.497L9.249 8.248a.999.999 0 1 0 1.414 1.414l2.541-2.54ZM6 19c0 1.103-.897 2-2 2s-2-.897-2-2 .897-2 2-2 2 .897 2 2Z" />
    </svg>
  );
});

CodeCompare.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CodeCompare.displayName = 'CodeCompare';

export default CodeCompare;
