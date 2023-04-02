import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Salad = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M23.194 11.6a3.942 3.942 0 0 0-2.143-1.447 21.606 21.606 0 0 0 .922-3.731 3.008 3.008 0 0 0-3.4-3.392c-.126.017-.5.072-1.011.171A4.979 4.979 0 0 0 18 .968a1 1 0 1 0-2 .064 3.021 3.021 0 0 1-.289 1.4 3.894 3.894 0 0 0-.611-1.08A4.006 4.006 0 0 0 11.5.034 3.8 3.8 0 0 0 9.5.8 3.939 3.939 0 0 0 7.233.01a3.949 3.949 0 0 0-2.885.877A4.028 4.028 0 0 0 3 3.782a4.1 4.1 0 0 0 .73 2.466 4.951 4.951 0 0 0-1.7 4.288A3.967 3.967 0 0 0 .164 15.15a14.749 14.749 0 0 0 3.707 6.316A8.922 8.922 0 0 0 10.139 24h3.722a8.918 8.918 0 0 0 6.267-2.534 14.741 14.741 0 0 0 3.708-6.316 4 4 0 0 0-.642-3.55Zm-4.343-6.59a1.013 1.013 0 0 1 1.139 1.142A20.024 20.024 0 0 1 18.975 10h-2.561l1.293-1.293a1 1 0 0 0-1.414-1.414L13.586 10h-1.549a3.428 3.428 0 0 1 .976-2.9c.427-.431 2.064-1.6 5.838-2.09ZM5 3.849a2.026 2.026 0 0 1 .665-1.457A2.035 2.035 0 0 1 7.1 2.006a1.748 1.748 0 0 1 1.328.531 1.438 1.438 0 0 0 1.072.479 1.44 1.44 0 0 0 1.068-.482 1.64 1.64 0 0 1 1.156-.513 2.031 2.031 0 0 1 1.828.6A2.118 2.118 0 0 1 14 3.985v.207a6.446 6.446 0 0 0-3.228 2.563 4.916 4.916 0 0 0-5.284-1.5A2.064 2.064 0 0 1 5 3.849ZM4 10a3 3 0 0 1 6 0H4Zm17.916 4.589a12.919 12.919 0 0 1-3.2 5.46A6.9 6.9 0 0 1 13.861 22h-3.722a6.909 6.909 0 0 1-4.857-1.951 12.917 12.917 0 0 1-3.2-5.46 2.019 2.019 0 0 1 .324-1.789A1.978 1.978 0 0 1 4 12h16a1.978 1.978 0 0 1 1.6.8 2.019 2.019 0 0 1 .316 1.789Z" />
    </svg>
  );
});

Salad.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Salad.displayName = 'Salad';

export default Salad;
