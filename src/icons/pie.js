import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Pie = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M24 14c0-3.624-5.353-8-12-8S0 10.376 0 14a2.946 2.946 0 0 0 2.142 2.887l.532 2.989A5 5 0 0 0 7.6 24h8.8a4.992 4.992 0 0 0 4.922-4.125l.532-2.988A2.946 2.946 0 0 0 24 14Zm-7.6 8H7.6a3.213 3.213 0 0 1-3.1-3.3A4.015 4.015 0 0 0 9 17.648a4.038 4.038 0 0 0 6 0 4.015 4.015 0 0 0 4.5 1.052 3.211 3.211 0 0 1-3.1 3.3Zm4.6-7a1.57 1.57 0 0 0-.406.09 1.232 1.232 0 0 0-.75.688 2.015 2.015 0 0 1-3.687 0 1.259 1.259 0 0 0-2.313 0 2 2 0 0 1-3.687 0 1.259 1.259 0 0 0-2.313 0 2.015 2.015 0 0 1-3.687 0 1.236 1.236 0 0 0-.751-.691A6.309 6.309 0 0 0 3 15a.915.915 0 0 1-1-1c0-2.369 4.479-6 10-6s10 3.631 10 5.988A.918.918 0 0 1 21 15ZM11 3V1a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0Zm4 0V1a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0ZM7 3V1a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0Zm3.985 7.65a5.4 5.4 0 0 1-.752 1.967 1.308 1.308 0 0 1-1.85-1.85 5.4 5.4 0 0 1 1.967-.752.526.526 0 0 1 .635.635Zm4.632.117a1.308 1.308 0 0 1-1.85 1.85 5.4 5.4 0 0 1-.752-1.967.526.526 0 0 1 .635-.635 5.4 5.4 0 0 1 1.967.752Z" />
    </svg>
  );
});

Pie.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Pie.displayName = 'Pie';

export default Pie;
