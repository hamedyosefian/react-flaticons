import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const PlayAlt = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M19 24H5a5.006 5.006 0 0 1-5-5V5a5.006 5.006 0 0 1 5-5h14a5.006 5.006 0 0 1 5 5v14a5.006 5.006 0 0 1-5 5zM5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3zm4.342 15.005a2.368 2.368 0 0 1-1.186-.323 2.313 2.313 0 0 1-1.164-2.021V9.339a2.337 2.337 0 0 1 3.5-2.029l5.278 2.635a2.336 2.336 0 0 1 .049 4.084l-5.376 2.687a2.2 2.2 0 0 1-1.101.289zm-.025-8a.314.314 0 0 0-.157.042.327.327 0 0 0-.168.292v5.322a.337.337 0 0 0 .5.293l5.376-2.688a.314.314 0 0 0 .12-.266.325.325 0 0 0-.169-.292L9.545 9.073a.462.462 0 0 0-.228-.068z" />
  </svg>
));

PlayAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PlayAlt.displayName = 'PlayAlt';

export default PlayAlt;
