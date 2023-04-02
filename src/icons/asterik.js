import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Asterik = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="m20.537 12.7-1.13-.7 1.131-.7a4.126 4.126 0 0 0 1.729-2.031 3.919 3.919 0 0 0-3.28-5.272 4.124 4.124 0 0 0-2.586.654L16 4.9v-.728A4.116 4.116 0 0 0 12.393.019 4 4 0 0 0 8 4v.9l-.4-.25a4.122 4.122 0 0 0-2.587-.657 3.918 3.918 0 0 0-3.283 5.27 4.123 4.123 0 0 0 1.73 2.031L4.593 12l-1.131.7a4.126 4.126 0 0 0-1.729 2.031 3.918 3.918 0 0 0 3.286 5.272 4.124 4.124 0 0 0 2.581-.651L8 19.1v.9a4 4 0 0 0 8 0v-.9l.4.251a4.126 4.126 0 0 0 2.58.653 3.918 3.918 0 0 0 3.284-5.272 4.128 4.128 0 0 0-1.727-2.032zm-.311 4.418a1.916 1.916 0 0 1-2.639.613l-2.059-1.282A1 1 0 0 0 14 17.3V20a2 2 0 0 1-4 0v-2.7a1 1 0 0 0-1.528-.849l-2.059 1.284a1.915 1.915 0 1 1-2.025-3.252l2.625-1.634a1 1 0 0 0 0-1.7L4.388 9.516a1.915 1.915 0 0 1 2.025-3.252l2.059 1.282A1 1 0 0 0 10 6.7V4.107a2.075 2.075 0 0 1 1.664-2.08A2 2 0 0 1 14 4v2.7a1 1 0 0 0 1.528.848l2.059-1.281a1.915 1.915 0 1 1 2.025 3.252l-2.625 1.634a1 1 0 0 0 0 1.7l2.625 1.634a1.914 1.914 0 0 1 .614 2.638z" />
    </svg>
  );
});

Asterik.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Asterik.displayName = 'Asterik';

export default Asterik;
