import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const CodeMerge = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M20 8a4.006 4.006 0 0 0-3.873 3H8c-1.654 0-3-1.346-3-3v-.127A4.006 4.006 0 0 0 8 4c0-2.206-1.794-4-4-4S0 1.794 0 4a4.006 4.006 0 0 0 3 3.873v8.253a4.006 4.006 0 0 0-3 3.873c0 2.206 1.794 4 4 4s4-1.794 4-4a4.006 4.006 0 0 0-3-3.873v-4.129a4.973 4.973 0 0 0 3 1.002h8.127a4.007 4.007 0 0 0 3.873 3c2.206 0 4-1.794 4-4s-1.794-4-4-4ZM2 4c0-1.103.897-2 2-2s2 .897 2 2-.897 2-2 2-2-.897-2-2Zm4 16c0 1.103-.897 2-2 2s-2-.897-2-2 .897-2 2-2 2 .897 2 2Zm14-6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2Z" />
    </svg>
  );
});

CodeMerge.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CodeMerge.displayName = 'CodeMerge';

export default CodeMerge;
