import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const LinkSlash = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M4.262 9.772a1 1 0 1 1 1.412 1.417l-2.197 2.189A5.008 5.008 0 0 0 2 16.942c0 1.346.524 2.612 1.477 3.564a5.053 5.053 0 0 0 3.569 1.493 5.028 5.028 0 0 0 3.558-1.458l2.208-2.215a1 1 0 1 1 1.416 1.413l-2.209 2.216A7.031 7.031 0 0 1 7.036 24a7.046 7.046 0 0 1-4.973-2.079A6.99 6.99 0 0 1 0 16.943c0-1.881.732-3.649 2.063-4.98l2.198-2.191Zm4.267 4.284-.801.801a.999.999 0 1 0 1.414 1.414l.801-.801a.999.999 0 1 0-1.414-1.414ZM.293.293a.999.999 0 0 1 1.414 0l6.019 6.019.003-.005 4.252-4.245C13.312.732 15.079 0 16.96 0s3.648.732 4.978 2.062C23.268 3.392 24 5.16 24 7.041s-.732 3.648-2.062 4.978l-4.245 4.253-.005.003 6.019 6.019a.999.999 0 1 1-1.414 1.414l-22-22.001a.999.999 0 0 1 0-1.414Zm11.706 10.292 2.859-2.859a.999.999 0 1 1 1.414 1.414l-2.859 2.859 2.862 2.862.002-.003 4.246-4.253C21.475 9.653 22 8.387 22 7.041s-.524-2.612-1.477-3.564-2.218-1.476-3.563-1.476-2.612.524-3.565 1.477L9.142 7.724l-.003.002 2.86 2.86Z" />
    </svg>
  );
});

LinkSlash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

LinkSlash.displayName = 'LinkSlash';

export default LinkSlash;
