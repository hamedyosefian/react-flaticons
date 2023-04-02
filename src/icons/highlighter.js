import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Highlighter = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="m22.682 1.705-.387-.387a4.517 4.517 0 0 0-6.136-.212L4.007 11.762A6.006 6.006 0 0 0 2 16.24v4.346L.293 22.293a.999.999 0 1 0 1.414 1.414L3.414 22H7.76a6.005 6.005 0 0 0 4.483-2.013l10.654-12.15a4.515 4.515 0 0 0-.216-6.133ZM4 20v-3.76c0-.253.033-.502.079-.747l4.427 4.427a3.962 3.962 0 0 1-.747.079h-3.76ZM21.391 6.522 10.745 18.663c-.106.119-.232.213-.35.318l-5.376-5.376c.103-.116.195-.24.312-.344L17.474 2.612a2.508 2.508 0 0 1 3.407.12l.387.387c.924.924.977 2.42.123 3.404Z" />
    </svg>
  );
});

Highlighter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Highlighter.displayName = 'Highlighter';

export default Highlighter;
