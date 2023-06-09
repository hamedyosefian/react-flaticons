import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const CodeCommit = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M23 11h-4.072C18.441 7.612 15.52 5 12 5s-6.442 2.612-6.928 6H1a1 1 0 0 0 0 2h4.072c.487 3.388 3.408 6 6.928 6s6.441-2.612 6.928-6H23a1 1 0 1 0 0-2Zm-11 6c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5Z" />
    </svg>
  );
});

CodeCommit.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CodeCommit.displayName = 'CodeCommit';

export default CodeCommit;
