import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Bacon = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M23.088 4.751 19.153.816A2.764 2.764 0 0 0 14.472 2.3a2.54 2.54 0 0 1-2.186 2.187 3.286 3.286 0 0 0-2.807 2.805 2.542 2.542 0 0 1-2.187 2.187 3.286 3.286 0 0 0-2.806 2.807 2.509 2.509 0 0 1-.721 1.465 2.546 2.546 0 0 1-1.51.727 2.581 2.581 0 0 0-2.108 1.785 2.805 2.805 0 0 0 .668 2.889L4.761 23.1c1.334 1.366 3.25 1.035 4.651-.033a5.619 5.619 0 0 0 2.424-1.243 4.488 4.488 0 0 0 1.291-2.624 1.277 1.277 0 0 1 1.073-1.08 4.546 4.546 0 0 0 3.916-3.915 1.278 1.278 0 0 1 1.084-1.078 4.578 4.578 0 0 0 3.846-3.642 2.945 2.945 0 0 1 .251-.5 3.173 3.173 0 0 0-.209-4.234ZM2.044 16.9a.614.614 0 0 1 .509-.44 4.5 4.5 0 0 0 2.627-1.29 4.491 4.491 0 0 0 1.289-2.63 1.279 1.279 0 0 1 1.077-1.078 4.542 4.542 0 0 0 3.916-3.916 1.279 1.279 0 0 1 1.078-1.077 4.543 4.543 0 0 0 3.918-3.931.75.75 0 0 1 1.282-.307l1.291 1.291c-1.356.881-.918 2.546-1.938 3.585a2.511 2.511 0 0 1-1.466.72 3.286 3.286 0 0 0-2.806 2.807 2.533 2.533 0 0 1-2.188 2.186 3.289 3.289 0 0 0-2.806 2.807 2.506 2.506 0 0 1-.721 1.466c-1.035 1.017-2.706.587-3.584 1.938L2.23 17.739a.822.822 0 0 1-.186-.839Zm19.673-9.141a6.63 6.63 0 0 0-.585 1.14 2.573 2.573 0 0 1-2.189 2.245 3.289 3.289 0 0 0-2.807 2.806 2.539 2.539 0 0 1-2.186 2.187 3.284 3.284 0 0 0-2.806 2.806 2.516 2.516 0 0 1-.722 1.466c-.661.638-1.9.643-2.643 1.31-1.185.936-2.066-.586-2.824-1.255A1.28 1.28 0 0 1 5.9 19.8a4.544 4.544 0 0 0 3.916-3.915 1.278 1.278 0 0 1 1.072-1.085 4.533 4.533 0 0 0 3.917-3.916 1.276 1.276 0 0 1 1.076-1.077A4.547 4.547 0 0 0 19.8 5.9a1.275 1.275 0 0 1 .666-.94c.662.748 2.174 1.627 1.251 2.799Z" />
    </svg>
  );
});

Bacon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Bacon.displayName = 'Bacon';

export default Bacon;
