import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const HeadSideThinking = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M19.8 4.419A10.9 10.9 0 0 0 9.453.106 11 11 0 0 0 2.26 17.674 3.886 3.886 0 0 1 3 20.029V21a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3h.494a5.014 5.014 0 0 0 4.957-4.345L21.67 15H22a1.959 1.959 0 0 0 2-2c0-1.42-2.932-7.015-4.2-8.581ZM20.793 13a1 1 0 0 0-.991.869l-.334 2.525A3.008 3.008 0 0 1 16.494 19H15a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-.971a5.9 5.9 0 0 0-1.151-3.571 9 9 0 0 1 5.876-14.37A9.265 9.265 0 0 1 11.005 2a8.941 8.941 0 0 1 7.218 3.648A31.212 31.212 0 0 1 22 13ZM16.2 8.011a1 1 0 0 0-1.366-.369l-.982.564A3.994 3.994 0 0 0 12 7.142V6a1 1 0 0 0-2 0v1.142a3.994 3.994 0 0 0-1.855 1.064l-.982-.564a1 1 0 1 0-1 1.734l.993.571A3.938 3.938 0 0 0 7 11a3.938 3.938 0 0 0 .159 1.053l-.993.571a1 1 0 0 0 1 1.734l.982-.564A3.994 3.994 0 0 0 10 14.858V16a1 1 0 0 0 2 0v-1.142a3.994 3.994 0 0 0 1.855-1.064l.982.564a1 1 0 1 0 1-1.734l-.993-.571A3.938 3.938 0 0 0 15 11a3.938 3.938 0 0 0-.159-1.053l.993-.571a1 1 0 0 0 .366-1.365ZM11 13a2 2 0 1 1 2-2 2 2 0 0 1-2 2Z" />
    </svg>
  );
});

HeadSideThinking.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

HeadSideThinking.displayName = 'HeadSideThinking';

export default HeadSideThinking;
