import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const VideoPlus = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M22.903 6.538a1.976 1.976 0 0 0-2.078.188c-.039.029-1.844 1.845-1.844 1.845A5.007 5.007 0 0 0 14 4H5C2.243 4 0 6.243 0 9v6c0 2.757 2.243 5 5 5h9a5.006 5.006 0 0 0 4.984-4.606s1.803 1.796 1.841 1.825a1.979 1.979 0 0 0 2.078.188A1.975 1.975 0 0 0 24 15.632V8.313c0-.756-.42-1.437-1.097-1.775ZM17 15c0 1.654-1.346 3-3 3H5c-1.654 0-3-1.346-3-3V9c0-1.654 1.346-3 3-3h9c1.654 0 3 1.346 3 3v6Zm2-2.417v-1.189l3-3.028.025 7.239L19 12.583ZM13.5 12a1 1 0 0 1-1 1h-2v2a1 1 0 0 1-2 0v-2h-2a1 1 0 0 1 0-2h2V9a1 1 0 0 1 2 0v2h2a1 1 0 0 1 1 1Z" />
    </svg>
  );
});

VideoPlus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

VideoPlus.displayName = 'VideoPlus';

export default VideoPlus;
