import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Braille = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M11 3.5C11 5.43 9.43 7 7.5 7S4 5.43 4 3.5 5.57 0 7.5 0 11 1.57 11 3.5ZM16.5 7C18.43 7 20 5.43 20 3.5S18.43 0 16.5 0 13 1.57 13 3.5 14.57 7 16.5 7Zm-9 1C5.57 8 4 9.57 4 11.5S5.57 15 7.5 15s3.5-1.57 3.5-3.5S9.43 8 7.5 8ZM20 11.5c0 1.93-1.57 3.5-3.5 3.5S13 13.43 13 11.5 14.57 8 16.5 8 20 9.57 20 11.5Zm-2 0c0-.827-.673-1.5-1.5-1.5s-1.5.673-1.5 1.5.673 1.5 1.5 1.5 1.5-.673 1.5-1.5Zm-7 8c0 1.93-1.57 3.5-3.5 3.5S4 21.43 4 19.5 5.57 16 7.5 16s3.5 1.57 3.5 3.5Zm-2 0c0-.827-.673-1.5-1.5-1.5S6 18.673 6 19.5 6.673 21 7.5 21 9 20.327 9 19.5Zm11 0c0 1.93-1.57 3.5-3.5 3.5S13 21.43 13 19.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5Zm-2 0c0-.827-.673-1.5-1.5-1.5s-1.5.673-1.5 1.5.673 1.5 1.5 1.5 1.5-.673 1.5-1.5Z" />
    </svg>
  );
});

Braille.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Braille.displayName = 'Braille';

export default Braille;
