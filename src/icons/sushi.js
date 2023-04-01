import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Sushi = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M4.5 11c.067 1.293 7.938 1.291 8 0-.067-1.293-7.938-1.291-8 0Zm7-6c.067 1.293 7.938 1.291 8 0-.067-1.293-7.938-1.291-8 0ZM24 5v8c0 2.492-2.948 4.516-7 4.922C18.238 25.678.277 25.9 0 19v-8c0-2.5 2.974-4.514 7-4.921C5.76-1.679 23.723-1.9 24 5ZM9 5a1.587 1.587 0 0 0 .461 1.032A10.661 10.661 0 0 1 15.329 8c3.742.088 6.726-1.558 6.671-3-.423-3.943-12.581-3.94-13 0Zm-7 6c.424 3.944 12.581 3.939 13 0-.424-3.944-12.581-3.939-13 0Zm13 8v-4.749c-2.963 2.292-10.037 2.292-13 0V19c.422 3.943 12.582 3.939 13 0Zm7-6V8.251a10.868 10.868 0 0 1-5.188 1.686c.357.663.127 5.183.188 5.974 3.029-.35 5-1.702 5-2.911Z" />
    </svg>
  );
});

Sushi.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Sushi.displayName = 'Sushi';

export default Sushi;
