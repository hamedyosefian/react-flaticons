import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Tree = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M20.467 17.3a530.27 530.27 0 0 0-1.557-1.815 2.67 2.67 0 0 0 .616-3.663 477.15 477.15 0 0 0-1.885-2.091 2.475 2.475 0 0 0 1.084-1.073 2.428 2.428 0 0 0-.176-2.526C18.528 6.1 13.886.846 13.886.846a2.608 2.608 0 0 0-3.771 0S5.472 6.1 5.451 6.13a2.428 2.428 0 0 0-.176 2.526 2.475 2.475 0 0 0 1.084 1.073S4.5 11.784 4.474 11.82a2.67 2.67 0 0 0 .616 3.663S3.554 17.268 3.533 17.3A3 3 0 0 0 6 22h5v1a1 1 0 0 0 2 0v-1h5a3 3 0 0 0 2.471-4.7Zm-1.585 2.167A.985.985 0 0 1 18 20H6a1 1 0 0 1-.85-1.529L7.285 16H13a1 1 0 0 0 0-2H6.67a.667.667 0 0 1-.578-1l2.722-3H12a1 1 0 0 0 0-2H7.5a.488.488 0 0 1-.451-.264.416.416 0 0 1 .01-.418l4.552-5.149a.508.508 0 0 1 .773 0l4.55 5.148a.415.415 0 0 1 .011.418A.488.488 0 0 1 16.5 8h-.868a1.006 1.006 0 0 0-.74 1.672L17.908 13a.667.667 0 0 1-.578 1h-.157a1.007 1.007 0 0 0-.757 1.653l2.43 2.818a.979.979 0 0 1 .036.994Z" />
  </svg>
));

Tree.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Tree.displayName = 'Tree';

export default Tree;
