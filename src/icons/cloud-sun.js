import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const CloudSun = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M13.892 24c-1.96 0-3.837-.008-4.491-.026a3.749 3.749 0 0 1-.834-.121 3.5 3.5 0 0 1-.449-6.588 6.366 6.366 0 0 1 .057-2.732 6 6 0 0 1 11.368-.855c.136.326.286.36.587.427l.176.042a5.014 5.014 0 0 1 3.559 6 4.951 4.951 0 0 1-3.7 3.7 5.283 5.283 0 0 1-1.064.131c-.872.012-3.088.022-5.209.022Zm.09-12.023a4.045 4.045 0 0 0-.589.043 3.994 3.994 0 0 0-3.306 4.78 2.017 2.017 0 0 1-1.18 2.3 1.494 1.494 0 0 0-.851 1.8 1.473 1.473 0 0 0 1.02 1.019 1.673 1.673 0 0 0 .382.057c1.342.036 7.945.03 9.6 0a3.234 3.234 0 0 0 .657-.081 2.977 2.977 0 0 0 2.2-2.193 3.023 3.023 0 0 0-2.132-3.622l-.092-.021a2.582 2.582 0 0 1-2-1.611 4.013 4.013 0 0 0-3.709-2.471ZM2.28 16.894a1 1 0 0 1-.512-1.86l2.709-1.612a.5.5 0 0 0 .3-.54 6.425 6.425 0 0 1-.2-.882H1a1 1 0 0 1 0-2h3.575a6.206 6.206 0 0 1 .387-1.4L1.884 6.8a1 1 0 1 1 1.01-1.725l3.1 1.814a6.718 6.718 0 0 1 .951-.934L5.11 2.854a1 1 0 0 1 1.721-1.02l1.843 3.109A6.5 6.5 0 0 1 10 4.58V1a1 1 0 0 1 2 0v3.577a6.137 6.137 0 0 1 1.384.386l1.823-3.115a1 1 0 0 1 1.727 1.011l-1.843 3.146c.427.274.717 1 1.27.717L19 4.972a1 1 0 1 1 1.1 1.668l-2.684 1.78a2.511 2.511 0 0 1-3.147-.442A4.7 4.7 0 0 0 10.986 6.5 4.692 4.692 0 0 0 6.5 11.023a4.115 4.115 0 0 0 .191 1.277 2.462 2.462 0 0 1-1.231 2.863l-2.669 1.59a1 1 0 0 1-.511.141Z" />
    </svg>
  );
});

CloudSun.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CloudSun.displayName = 'CloudSun';

export default CloudSun;
