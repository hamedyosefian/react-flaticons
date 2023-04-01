import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const A = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="m23.931 22.634-7.787-19.82c-1.288-3.718-7-3.717-8.288 0L.069 22.634a1 1 0 1 0 1.861.731l2.501-6.366h15.137l2.501 6.366a1 1 0 0 0 1.861-.731ZM5.217 15l4.5-11.455c.924-2.104 3.641-2.104 4.565 0L18.782 15H5.217Z" />
    </svg>
  );
});

A.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

A.displayName = 'A';

export default A;
