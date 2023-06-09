import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const ArrowsHCopy = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="m16.332 18.253-2.885 2.835c-.108.108-.255.245-.414.389V2.522c.16.146.308.283.42.4l2.879 2.828a1 1 0 1 0 1.4-1.426L14.861 1.5c-.2-.2-.513-.486-.84-.776a3 3 0 0 0-3.976 0c-.327.289-.637.573-.834.77L6.332 4.319a1 1 0 0 0 1.4 1.426l2.885-2.834c.108-.108.255-.244.414-.389v18.955a9.244 9.244 0 0 1-.42-.4l-2.877-2.824a1 1 0 0 0-1.4 1.427l2.871 2.82c.2.2.513.487.84.777a2.99 2.99 0 0 0 1.982.752h.012a2.992 2.992 0 0 0 1.983-.754c.326-.289.636-.572.833-.769l2.879-2.828a1 1 0 0 0-1.4-1.427Z" />
    </svg>
  );
});

ArrowsHCopy.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowsHCopy.displayName = 'ArrowsHCopy';

export default ArrowsHCopy;
