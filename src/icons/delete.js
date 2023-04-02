import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Delete = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M19 2H9.956A4.966 4.966 0 0 0 6.01 3.931l-5.8 7.455a1 1 0 0 0 0 1.228l5.8 7.455A4.966 4.966 0 0 0 9.956 22H19a5.006 5.006 0 0 0 5-5V7a5.006 5.006 0 0 0-5-5zm3 15a3 3 0 0 1-3 3H9.956a2.979 2.979 0 0 1-2.368-1.158L2.267 12l5.321-6.842A2.979 2.979 0 0 1 9.956 4H19a3 3 0 0 1 3 3zm-4.793-6.793L15.414 12l1.793 1.793a1 1 0 1 1-1.414 1.414L14 13.414l-1.793 1.793a1 1 0 0 1-1.414-1.414L12.586 12l-1.793-1.793a1 1 0 0 1 1.414-1.414L14 10.586l1.793-1.793a1 1 0 0 1 1.414 1.414z" />
    </svg>
  );
});

Delete.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Delete.displayName = 'Delete';

export default Delete;
