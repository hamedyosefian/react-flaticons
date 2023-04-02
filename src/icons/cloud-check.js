import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const CloudCheck = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M11.692 23a2.98 2.98 0 0 1-2.121-.879L6.184 18.7A1 1 0 1 1 7.6 17.3l3.384 3.414a1.025 1.025 0 0 0 1.411 0l5.414-5.414a1 1 0 0 1 1.415 1.414l-5.415 5.414a2.976 2.976 0 0 1-2.117.872zM7 22a1 1 0 0 0-1-1h-.317a3.81 3.81 0 0 1-3.646-2.982 3.468 3.468 0 0 1 1.835-3.6 1.994 1.994 0 0 0 .792-2.686 6 6 0 1 1 11.06-4.513 3.1 3.1 0 0 0 2.044 2.053 5.971 5.971 0 0 1 4.213 6.211 5.845 5.845 0 0 1-4.293 5.076 1 1 0 0 0 .624 1.9 7.858 7.858 0 0 0 .044-15.1 1.09 1.09 0 0 1-.722-.735 8 8 0 0 0-15.49.842 7.652 7.652 0 0 0 .8 5.18A5.443 5.443 0 0 0 .057 18.3 5.843 5.843 0 0 0 5.683 23H6a1 1 0 0 0 1-1z" />
    </svg>
  );
});

CloudCheck.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CloudCheck.displayName = 'CloudCheck';

export default CloudCheck;
