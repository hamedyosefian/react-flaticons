import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const B = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M15.5 24H7c-2.757 0-5-2.243-5-5V5c0-2.757 2.243-5 5-5h5.5c5.786-.075 8.693 7.283 4.51 11.177 7.371 1.84 6.167 12.716-1.51 12.823ZM4 13v6c0 1.654 1.346 3 3 3h8.5c5.935-.156 5.931-8.846 0-9H4Zm0-2h8.5c5.935-.156 5.931-8.846 0-9H7C5.346 2 4 3.346 4 5v6Z" />
    </svg>
  );
});

B.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

B.displayName = 'B';

export default B;
