import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const CallHistory = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M17.762 24C9.631 24.275-5.017 9.745 1.784 1.867l1.15-1A3.08 3.08 0 0 1 7.26.911a1 1 0 0 1 .086.1l1.8 2.339a3.108 3.108 0 0 1-.01 4.28L7.978 9.086a12.789 12.789 0 0 0 6.931 6.946l1.464-1.165a3.17 3.17 0 0 1 4.282-.006l2.34 1.8a1.126 1.126 0 0 1 .1.085 3.11 3.11 0 0 1 0 4.378l-.911 1.05A6.154 6.154 0 0 1 17.762 24ZM5.071 2a1.094 1.094 0 0 0-.774.32l-1.151 1C-2.5 10.108 14.777 26.423 20.72 20.808l.912-1.051a1.1 1.1 0 0 0 .085-1.559l-2.327-1.787a.811.811 0 0 1-.1-.087 1.122 1.122 0 0 0-1.548 0 1.01 1.01 0 0 1-.084.076L15.7 17.96a1 1 0 0 1-.979.152A15.011 15.011 0 0 1 5.9 9.3a1 1 0 0 1 .146-1L7.6 6.344a.849.849 0 0 1 .075-.084 1.1 1.1 0 0 0 0-1.549.866.866 0 0 1-.086-.1L5.806 2.287a1.093 1.093 0 0 0-.735-.282Zm11.965 13.618Zm5.528-3.042c4.99-7.345-3.8-16.126-11.137-11.137a1 1 0 1 0 1.144 1.64c5.474-3.759 12.11 2.884 8.353 8.354a1 1 0 1 0 1.64 1.143Zm-3.858-1.865a1 1 0 0 0 0-1.414L17 7.59V5a1 1 0 0 0-2 0v3a1 1 0 0 0 .293.707l2 2a1 1 0 0 0 1.414 0Z" />
    </svg>
  );
});

CallHistory.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CallHistory.displayName = 'CallHistory';

export default CallHistory;
