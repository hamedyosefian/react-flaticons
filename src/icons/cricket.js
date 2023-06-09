import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Cricket = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M16.721 11a2.526 2.526 0 0 1-.221-1.02 2.686 2.686 0 0 1 .811-1.88L21.5 3.914l.793.793a1 1 0 0 0 1.414-1.414l-3-3a1 1 0 0 0-1.414 1.414l.793.793L15.9 6.689a2.687 2.687 0 0 1-1.847.811A2.437 2.437 0 0 1 13 7.276a3.041 3.041 0 0 0-3.418.578L.917 16.518a3 3 0 0 0-.853 1.711 5.054 5.054 0 0 0 1.3 4.405A4.841 4.841 0 0 0 4.869 24a6.4 6.4 0 0 0 .9-.064 2.985 2.985 0 0 0 1.71-.852l8.664-8.663A3.05 3.05 0 0 0 16.721 11Zm-4.537-1.9a4.466 4.466 0 0 0 1.883.4 3.984 3.984 0 0 0 .463-.03 4.412 4.412 0 0 0-.03.513 4.487 4.487 0 0 0 .393 1.823 1.141 1.141 0 0 1 0 .976A4.292 4.292 0 0 0 12.424 12a1.444 1.444 0 0 1-.379-.031.642.642 0 0 1-.045-.3 4.337 4.337 0 0 0-.78-2.569 1.014 1.014 0 0 1 .467-.11 1.2 1.2 0 0 1 .497.11ZM6.066 21.669a1 1 0 0 1-.577.286 3.115 3.115 0 0 1-2.709-.735 3.125 3.125 0 0 1-.735-2.708 1.016 1.016 0 0 1 .286-.58l7.413-7.413A2.551 2.551 0 0 1 10 11.673 2.166 2.166 0 0 0 12.413 14a2.384 2.384 0 0 1 1.071.253ZM20.5 17a3.5 3.5 0 1 0 3.5 3.5 3.5 3.5 0 0 0-3.5-3.5Zm0 5a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5Z" />
    </svg>
  );
});

Cricket.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Cricket.displayName = 'Cricket';

export default Cricket;
