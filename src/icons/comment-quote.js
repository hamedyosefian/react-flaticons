import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const CommentQuote = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M11 9.5V13c0 2.206-1.794 4-4 4a1 1 0 1 1 0-2c1.103 0 2-.897 2-2H7.5A1.5 1.5 0 0 1 6 11.5V10a2 2 0 0 1 2-2h1.5A1.5 1.5 0 0 1 11 9.5ZM16.5 8H15a2 2 0 0 0-2 2v1.5a1.5 1.5 0 0 0 1.5 1.5H16c0 1.103-.897 2-2 2a1 1 0 1 0 0 2c2.206 0 4-1.794 4-4V9.5A1.5 1.5 0 0 0 16.5 8Zm7.5 4.34V19c0 2.757-2.243 5-5 5h-5.917C6.082 24 .47 19.208.03 12.854a12.024 12.024 0 0 1 3.479-9.333A12.05 12.05 0 0 1 12.836.028C19.096.454 24 5.861 24 12.34Zm-2 0c0-5.431-4.085-9.962-9.299-10.315a10.018 10.018 0 0 0-7.777 2.911 10.024 10.024 0 0 0-2.899 7.781c.373 5.38 5.023 9.284 11.058 9.284H19c1.654 0 3-1.346 3-3v-6.66Z" />
    </svg>
  );
});

CommentQuote.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CommentQuote.displayName = 'CommentQuote';

export default CommentQuote;
