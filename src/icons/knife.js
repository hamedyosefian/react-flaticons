import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Knife = forwardRef(({ color, size, ...rest }, ref) => {
  const iconContext = useContext(IconContext);

  const mergedProps = {
    color: color ?? iconContext.color ?? 'currentColor',
    size: size ?? iconContext.size ?? '20px',
    ...rest,
  };
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={mergedProps.size}
      height={mergedProps.size}
      viewBox="0 0 24 24"
      fill={mergedProps.color}
      {...mergedProps}
    >
      <path d="M22.679.156a2.219 2.219 0 0 0-2.445.558L.266 22.321a1 1 0 0 0 1.469 1.357l5.178-5.6C19.92 16.92 24.011 6.243 24 2.5A2.2 2.2 0 0 0 22.679.156ZM22 2.5c0 1.876-2.321 11.13-12.939 13.25L21.694 2.08a.226.226 0 0 1 .245-.066c.109.007.045.41.061.486Z" />
    </svg>
  );
});

Knife.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Knife.displayName = 'Knife';

export default Knife;
