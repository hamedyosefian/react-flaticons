import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Spade = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M23 13.5c0-4.363-4.846-9.756-7.709-12.255a5.029 5.029 0 0 0-6.583 0C5.846 3.745 1 9.138 1 13.5A6.271 6.271 0 0 0 7 20a5.824 5.824 0 0 0 3.93-1.658C10.75 20.805 10.115 22 8 22H6a1 1 0 0 0 0 2h12a1 1 0 0 0 0-2h-2c-2.115 0-2.75-1.2-2.93-3.658A5.824 5.824 0 0 0 17 20a6.271 6.271 0 0 0 6-6.5Zm-10.1 1.417a1 1 0 0 0-.9-.552 1 1 0 0 0-.893.55C11.091 14.945 9.514 18 7 18a4.277 4.277 0 0 1-4-4.5c0-3.032 3.533-7.7 7.023-10.747a3.019 3.019 0 0 1 3.954 0C17.467 5.8 21 10.47 21 13.5a4.277 4.277 0 0 1-4 4.5c-2.515 0-4.091-3.055-4.1-3.083Z" />
    </svg>
  );
});

Spade.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Spade.displayName = 'Spade';

export default Spade;
