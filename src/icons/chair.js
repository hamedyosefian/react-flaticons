import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Chair = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M19 13.257V5c0-2.757-2.243-5-5-5h-4C7.243 0 5 2.243 5 5v8.257A4.508 4.508 0 0 0 2 17.5V23a1 1 0 1 0 2 0v-4h16v4a1 1 0 1 0 2 0v-5.5a4.508 4.508 0 0 0-3-4.243ZM17 5v8h-2V2.172c1.164.413 2 1.524 2 2.828Zm-6 8V2h2v11h-2ZM9 2.172V13H7V5c0-1.304.836-2.415 2-2.828ZM6.5 15h11c1.207 0 2.217.86 2.45 2H4.05c.232-1.14 1.242-2 2.45-2Z" />
    </svg>
  );
});

Chair.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Chair.displayName = 'Chair';

export default Chair;
