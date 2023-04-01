import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Cursor = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M15.008 24a3.007 3.007 0 0 1-2.681-1.636L9.2 15.66l-3.542 3.093A1 1 0 0 1 4 18V2.98A3 3 0 0 1 8.989.734l10.7 10.238a1 1 0 0 1-.6 1.719l-4.468.407 3.065 6.569A3 3 0 0 1 15.008 24zM9.543 13.032a1.039 1.039 0 0 1 .207.021 1 1 0 0 1 .7.556l3.675 7.876a1 1 0 0 0 1.767-.94l-3.682-7.891a1 1 0 0 1 .815-1.419l3.7-.337-9.091-8.692a.972.972 0 0 0-1.045-.138A.986.986 0 0 0 6 2.98V15.8l2.885-2.52a1 1 0 0 1 .658-.248z" />
    </svg>
  );
});

Cursor.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Cursor.displayName = 'Cursor';

export default Cursor;
