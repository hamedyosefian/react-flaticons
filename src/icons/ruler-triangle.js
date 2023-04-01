import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const RulerTriangle = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M22.824 17.179 6.821 1.177C5.656.012 3.986-.322 2.467.311A3.93 3.93 0 0 0 0 4.002v14.991A5.013 5.013 0 0 0 5.007 24h14.991c1.646 0 3.061-.945 3.691-2.467s.298-3.189-.866-4.354Zm-.981 3.59A1.941 1.941 0 0 1 19.999 22H5.007A3.01 3.01 0 0 1 2 18.993V4.002c0-.835.46-1.524 1.232-1.844a1.945 1.945 0 0 1 2.175.433l1.611 1.611L5.11 6.11a.999.999 0 1 0 1.414 1.414l1.908-1.908 1.466 1.466L7.99 8.99a.999.999 0 1 0 1.414 1.414l1.908-1.908 1.415 1.414-1.908 1.908a.999.999 0 1 0 1.414 1.414l1.908-1.908 1.414 1.414-1.908 1.908a.999.999 0 1 0 1.414 1.414l1.908-1.908 1.414 1.414-1.908 1.908a.999.999 0 1 0 1.414 1.414l1.908-1.908 1.611 1.611c.59.591.752 1.404.433 2.176Zm-11.135-4.476A1 1 0 0 1 10.001 18h-3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1.707-.707l3 3Z" />
    </svg>
  );
});

RulerTriangle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

RulerTriangle.displayName = 'RulerTriangle';

export default RulerTriangle;
