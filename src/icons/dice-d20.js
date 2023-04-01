import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const DiceD20 = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="m20.573 4.312-6-3.6a4.989 4.989 0 0 0-5.146 0l-6 3.6A5.027 5.027 0 0 0 1 8.6v6.8a5.027 5.027 0 0 0 2.427 4.288l6 3.6a4.987 4.987 0 0 0 5.146 0l6-3.6A5.027 5.027 0 0 0 23 15.4V8.6a5.027 5.027 0 0 0-2.427-4.288ZM3.005 8.437l2.733 1.639L3 14.09s0-5.599.005-5.653Zm9-5.378L15.3 9H8.7Zm9 10.918-2.73-3.905L21 8.437v5.54ZM8.805 11H15.2L12 16.113Zm-4.787 5.147 2.943-4.322 3.046 4.875Zm13.029-4.334 3.027 4.332-6.074.538Zm2.5-5.786a2.98 2.98 0 0 1 .668.548l-2.982 1.786-3.1-5.579Zm-15.086 0 5.407-3.246L6.77 8.363 3.789 6.575a2.98 2.98 0 0 1 .668-.548Zm.44 12.21L11 18.8v3.03a3.022 3.022 0 0 1-.543-.257Zm8.646 3.335a3.022 3.022 0 0 1-.543.257v-3.05l6.1-.54Z" />
    </svg>
  );
});

DiceD20.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

DiceD20.displayName = 'DiceD20';

export default DiceD20;
