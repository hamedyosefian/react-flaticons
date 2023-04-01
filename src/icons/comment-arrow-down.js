import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CommentArrowDown = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M16.707 13.174a.999.999 0 0 1 0 1.414l-2.535 2.535c-.585.585-1.412.876-2.172.876s-1.515-.32-2.071-.876l-2.636-2.636a.999.999 0 1 1 1.414-1.414L11 15.366V7a1 1 0 0 1 2 0v8.467l2.293-2.293a.999.999 0 0 1 1.414 0ZM24 12.34V19c0 2.757-2.243 5-5 5h-5.917C6.082 24 .47 19.208.03 12.854c-.241-3.476 1.027-6.878 3.479-9.333S9.367-.206 12.836.029C19.096.454 24 5.862 24 12.34Zm-2 0c0-5.431-4.085-9.962-9.299-10.316a10.015 10.015 0 0 0-7.777 2.91 10.019 10.019 0 0 0-2.899 7.782c.373 5.38 5.023 9.285 11.058 9.285H19c1.654 0 3-1.346 3-3v-6.66Z" />
    </svg>
  );
});

CommentArrowDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CommentArrowDown.displayName = 'CommentArrowDown';

export default CommentArrowDown;
