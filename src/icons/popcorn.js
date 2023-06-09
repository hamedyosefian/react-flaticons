import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Popcorn = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M11 6a1 1 0 0 1-1 1 1 1 0 0 0-1 1 1 1 0 0 1-2 0 3 3 0 0 1 3-3 1 1 0 0 1 1 1Zm3 1a1 1 0 0 0 0 2 1 1 0 0 1 1 1 1 1 0 0 0 2 0 3 3 0 0 0-3-3Zm7.923 6.486-1.3 6.5A5.013 5.013 0 0 1 15.721 24H8.279a5.013 5.013 0 0 1-4.9-4.019l-1.3-6.5a4.007 4.007 0 0 1-.05-6.953A4.007 4.007 0 0 1 5.311 3.06a3.456 3.456 0 0 1 3.7-2.016A3.517 3.517 0 0 1 14.66 2a3.479 3.479 0 0 1 2.392 1.115 4.011 4.011 0 0 1 4.921 3.414 4.007 4.007 0 0 1-.05 6.957ZM8.484 22 8 16.062A2.019 2.019 0 0 0 6 14H4.22l1.117 5.588A3.029 3.029 0 0 0 8.484 22Zm4.972 0L14 15.978A2 2 0 0 0 10 16l.487 6Zm6.324-8H18a2 2 0 0 0-2 2l-.537 6a3.038 3.038 0 0 0 3.2-2.412ZM22 10a2 2 0 0 0-1.335-1.874A1 1 0 0 1 20 7.184a2.012 2.012 0 0 0-2.872-1.972 1 1 0 0 1-1.318-.42A1.5 1.5 0 0 0 14.5 4a1.13 1.13 0 0 1-1.529-.762 1.5 1.5 0 0 0-2.739-.526C9.788 3.43 9.122 3.1 8.5 3a1.5 1.5 0 0 0-1.47 1.2 1 1 0 0 1-1.072.8A2 2 0 0 0 4 7a1.047 1.047 0 0 1-.665 1.126A2 2 0 0 0 4 12h2a3.975 3.975 0 0 1 3 1.382 3.994 3.994 0 0 1 5.994-.007A4.008 4.008 0 0 1 18 12h2a2 2 0 0 0 2-2Z" />
    </svg>
  );
});

Popcorn.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Popcorn.displayName = 'Popcorn';

export default Popcorn;
