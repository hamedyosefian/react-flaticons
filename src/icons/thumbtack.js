import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Thumbtack = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M1 24a1 1 0 0 0 .707-.293l6.619-6.619 1.248 1.292a5.169 5.169 0 0 0 3.605 1.614 3.991 3.991 0 0 0 1.339-.227 3.63 3.63 0 0 0 2.435-3.122 8.486 8.486 0 0 0-.222-3.027l-.214-1.042a1 1 0 0 1 .264-.943l1.587-1.588a.34.34 0 0 1 .236-.1.17.17 0 0 1 .167.065 3.077 3.077 0 0 0 3.971.432 3 3 0 0 0 .379-4.565L18.2.954a3.085 3.085 0 0 0-3.938-.4 3 3 0 0 0-.38 4.565l.076.076a.308.308 0 0 1 0 .434l-1.6 1.6a1 1 0 0 1-.954.261l-.817-.209a8.632 8.632 0 0 0-3.082-.233A3.863 3.863 0 0 0 4.25 9.634a4 4 0 0 0 .928 4.2l1.758 1.82-6.643 6.639A1 1 0 0 0 1 24Zm5.135-13.7a1.856 1.856 0 0 1 1.578-1.264A6.7 6.7 0 0 1 8.406 9a6.622 6.622 0 0 1 1.681.217l.823.21a3.01 3.01 0 0 0 2.862-.785l1.6-1.6a2.31 2.31 0 0 0 0-3.262l-.076-.076a1 1 0 0 1 .134-1.528 1.084 1.084 0 0 1 1.356.19L21.71 7.29a1 1 0 0 1-.134 1.528 1.085 1.085 0 0 1-1.368-.2 2.212 2.212 0 0 0-1.584-.672 2.4 2.4 0 0 0-1.667.684l-1.586 1.587a3 3 0 0 0-.8 2.8l.219 1.058a6.646 6.646 0 0 1 .181 2.366 1.655 1.655 0 0 1-1.115 1.444 2.8 2.8 0 0 1-2.85-.9l-4.4-4.55a2.027 2.027 0 0 1-.471-2.135Z" />
    </svg>
  );
});

Thumbtack.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Thumbtack.displayName = 'Thumbtack';

export default Thumbtack;
