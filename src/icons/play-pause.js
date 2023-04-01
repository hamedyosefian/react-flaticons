import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const PlayPause = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M22 21a1 1 0 0 1-1-1V4a1 1 0 1 1 2 0v16a1 1 0 0 1-1 1Zm-4 0a1 1 0 0 1-1-1V4a1 1 0 1 1 2 0v16a1 1 0 0 1-1 1Zm-13.673-.271a3.346 3.346 0 0 1-1.509-.367A3.26 3.26 0 0 1 1 17.404V6.597a3.26 3.26 0 0 1 1.817-2.958 3.305 3.305 0 0 1 3.46.285l7.368 5.402c.86.631 1.354 1.606 1.354 2.674s-.494 2.043-1.355 2.674l-7.368 5.403a3.28 3.28 0 0 1-1.949.651ZM4.324 5.274c-.205 0-.408.05-.603.149-.458.232-.721.66-.721 1.174v10.807c0 .514.263.941.721 1.174.459.232.959.19 1.372-.112l7.369-5.404c.347-.254.538-.631.538-1.061s-.191-.807-.538-1.061L5.094 5.536a1.294 1.294 0 0 0-.77-.262Z" />
    </svg>
  );
});

PlayPause.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PlayPause.displayName = 'PlayPause';

export default PlayPause;
