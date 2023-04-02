import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Motorcycle = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M19 11a5.186 5.186 0 0 0-.6.036l-.607-1.82a15.373 15.373 0 0 1 1.493-.187C19.767 10.053 21.909 10.543 22 9V7c-.1-1.574-2.293-1.033-2.747.026a17 17 0 0 0-2.02.259l-.079.016-.522-1.566A3.994 3.994 0 0 0 12.838 3H11a1 1 0 0 0 0 2h1.838a2 2 0 0 1 1.9 1.368l.553 1.659A5.987 5.987 0 0 0 14.063 9H8.825A3 3 0 0 0 6 7H3a1 1 0 0 0 0 2h3a.983.983 0 0 1 .895.553A1.017 1.017 0 0 1 7 9.948a1.579 1.579 0 0 1-.2.652l-.44.586A5.025 5.025 0 0 0 0 16c.114 6.163 8.966 6.763 9.947.726A4.016 4.016 0 0 0 11.7 15.4l3.451-4.6a9.341 9.341 0 0 1 .794-.8l.555 1.67A5.015 5.015 0 0 0 19 21c6.608-.21 6.606-9.791 0-10ZM5 19a3 3 0 0 1 0-6l-.6.8A2 2 0 0 0 6 17h1.828A3 3 0 0 1 5 19Zm5.1-4.8a2.01 2.01 0 0 1-1.6.8H6l2.4-3.2a3.03 3.03 0 0 0 .431-.8H12.5ZM19 19a3.013 3.013 0 0 1-1.842-5.365l.894 2.681a1 1 0 1 0 1.9-.632L19.054 13A3 3 0 0 1 19 19Z" />
    </svg>
  );
});

Motorcycle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Motorcycle.displayName = 'Motorcycle';

export default Motorcycle;
