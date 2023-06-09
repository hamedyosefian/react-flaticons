import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const CursorPlus = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M16 8a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8zm0 14a6 6 0 1 1 6-6 6.006 6.006 0 0 1-6 6zm4-6a1 1 0 0 1-1 1h-2v2a1 1 0 0 1-2 0v-2h-2a1 1 0 0 1 0-2h2v-2a1 1 0 0 1 2 0v2h2a1 1 0 0 1 1 1zM12 4.981a1 1 0 0 0-.586-.891L2.739.146a.893.893 0 0 0-.09-.037A1.99 1.99 0 0 0 .588.588a2.011 2.011 0 0 0-.442 2.151l3.944 8.675a1 1 0 0 0 .891.586H5a1 1 0 0 0 .895-.553l1.85-3.7 3.7-1.85A1 1 0 0 0 12 4.981zM6.553 6.105a1 1 0 0 0-.448.448L5.041 8.681 2 2.005l6.679 3.038z" />
    </svg>
  );
});

CursorPlus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CursorPlus.displayName = 'CursorPlus';

export default CursorPlus;
