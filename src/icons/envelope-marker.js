import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const EnvelopeMarker = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M22 0h-5a2 2 0 0 0-2 2v6.948a2.051 2.051 0 0 0 3.331 1.6l1.169-.935 1.169.936A2.051 2.051 0 0 0 24 8.948V2a2 2 0 0 0-2-2Zm-.081 8.987-1.794-1.435a1 1 0 0 0-1.25 0L17 8.948V2h5ZM24 14v5a5.006 5.006 0 0 1-5 5H5a5.006 5.006 0 0 1-5-5V8a5.006 5.006 0 0 1 5-5h7a1 1 0 0 1 0 2H5a2.99 2.99 0 0 0-2.639 1.6l7.517 7.518a3.075 3.075 0 0 0 4.243 0l.858-.837a1 1 0 1 1 1.4 1.43l-.849.829a5.025 5.025 0 0 1-7.062-.008L2 9.071V19a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-5a1 1 0 0 1 2 0Z" />
    </svg>
  );
});

EnvelopeMarker.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

EnvelopeMarker.displayName = 'EnvelopeMarker';

export default EnvelopeMarker;
