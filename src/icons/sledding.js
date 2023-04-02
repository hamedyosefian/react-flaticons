import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Sledding = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M23.9 21.73a3.889 3.889 0 0 1-5.24 1.877L.566 14.9a1 1 0 0 1 .867-1.8l18.094 8.7a1.894 1.894 0 0 0 2.571-.939 1 1 0 0 1 1.8.865ZM5 6h7.566l-3.852 5.062A3 3 0 0 0 11 16h4.379a1.007 1.007 0 0 1 .978.792l.3 1.417a1 1 0 1 0 1.955-.417l-.3-1.418A3.015 3.015 0 0 0 15.382 14H11a.985.985 0 0 1-.907-.579 1.016 1.016 0 0 1 .177-1.108l4.388-5.764 1.131.722a1.19 1.19 0 0 1-.118 1.468l-1.285 1.647a1 1 0 0 0 1.579 1.229l1.276-1.637a3.1 3.1 0 0 0-.127-4.211 1.083 1.083 0 0 0-.151-.119l-1.348-.861A4.988 4.988 0 0 0 12.927 4H5a1 1 0 0 0 0 2Zm13.5-1A2.5 2.5 0 1 0 16 2.5 2.5 2.5 0 0 0 18.5 5Z" />
  </svg>
));

Sledding.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Sledding.displayName = 'Sledding';

export default Sledding;
