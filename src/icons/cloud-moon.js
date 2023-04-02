import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const CloudMoon = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="m20.305 14.172-.175-.042c-.3-.068-.452-.1-.588-.427a6 6 0 0 0-11.367.856 6.376 6.376 0 0 0-.057 2.731 3.5 3.5 0 0 0 .451 6.589A3.8 3.8 0 0 0 9.4 24c1.566.039 8.2.029 9.693 0a5.241 5.241 0 0 0 1.066-.132c5.009-1.125 5.07-8.418.146-9.696Zm1.612 5.553a2.979 2.979 0 0 1-2.2 2.192 3.21 3.21 0 0 1-.658.082c-1.655.032-8.258.037-9.6 0a1.654 1.654 0 0 1-.382-.055 1.47 1.47 0 0 1-1.02-1.02 1.494 1.494 0 0 1 .85-1.8 2.019 2.019 0 0 0 1.18-2.306 4 4 0 0 1 3.305-4.778 4.028 4.028 0 0 1 4.3 2.427 2.725 2.725 0 0 0 2.093 1.633 3.022 3.022 0 0 1 2.132 3.625ZM5.261 17.613a1 1 0 0 1-1.4.177A9.914 9.914 0 0 1 .064 8.881 10.035 10.035 0 0 1 8.361.126 10.756 10.756 0 0 1 12.522.3a2.216 2.216 0 0 1 1.6 1.6 2.194 2.194 0 0 1-.619 2.153 7.85 7.85 0 0 0-2.513 4.71 1 1 0 1 1-1.985-.24 9.848 9.848 0 0 1 3.13-5.929.181.181 0 0 0 .05-.193.212.212 0 0 0-.153-.16A8.838 8.838 0 0 0 8.674 2.1a8.01 8.01 0 0 0-6.621 6.986 7.926 7.926 0 0 0 3.031 7.124 1 1 0 0 1 .177 1.403Z" />
    </svg>
  );
});

CloudMoon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CloudMoon.displayName = 'CloudMoon';

export default CloudMoon;
