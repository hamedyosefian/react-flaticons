import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Physics = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M22.563 1.437C20.189-.937 16.644-.358 12 3.137 7.357-.358 3.813-.938 1.437 1.437S-.358 7.356 3.137 12c-3.495 4.643-4.075 8.188-1.7 10.563A4.7 4.7 0 0 0 4.879 24C6.85 24 9.23 22.948 12 20.864 14.769 22.948 17.149 24 19.121 24a4.7 4.7 0 0 0 3.442-1.437c2.375-2.375 1.8-5.919-1.7-10.563 3.495-4.644 4.075-8.188 1.7-10.563zm-3.478.591a2.806 2.806 0 0 1 2.067.819c1.746 1.747.456 4.713-1.588 7.539-.838-.988-1.782-2.015-2.858-3.092s-2.106-2.021-3.094-2.86c1.898-1.373 3.86-2.406 5.473-2.406zM18.311 12c-1.011 1.22-2.082 2.361-3.016 3.3s-2.075 2-3.295 3.011C10.78 17.3 9.639 16.229 8.705 15.3S6.7 13.22 5.689 12C6.7 10.78 7.771 9.638 8.705 8.705S10.78 6.7 12 5.688A49.844 49.844 0 0 1 18.311 12zM2.848 2.848a2.8 2.8 0 0 1 2.067-.82c1.613 0 3.575 1.033 5.473 2.406-.988.839-2.016 1.783-3.094 2.86s-2.02 2.1-2.859 3.092C2.392 7.56 1.1 4.594 2.848 2.848zm0 18.3c-1.746-1.746-.456-4.713 1.587-7.538.839.988 1.783 2.015 2.859 3.092s2.1 2.023 3.089 2.861c-2.825 2.046-5.791 3.337-7.535 1.589zm18.3 0c-1.745 1.744-4.71.457-7.535-1.585.986-.838 2.014-1.787 3.089-2.861s2.02-2.1 2.858-3.092c2.048 2.83 3.34 5.796 1.592 7.542z" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
});

Physics.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Physics.displayName = 'Physics';

export default Physics;
