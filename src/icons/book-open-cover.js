import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const BookOpenCover = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M24 3v14.04a5.023 5.023 0 0 1-3.626 4.808l-6.726 1.921a5.994 5.994 0 0 1-3.296 0l-6.726-1.921A5.021 5.021 0 0 1 0 17.04V4c.006-1.308 1.994-1.307 2 0v13.04c0 1.333.895 2.519 2.176 2.885l6.726 1.921a4.005 4.005 0 0 0 2.198 0l6.725-1.921a3.013 3.013 0 0 0 2.176-2.885V3c.006-1.308 1.994-1.307 2 0ZM4 14.937V4c0-1.267.58-2.431 1.591-3.193A3.967 3.967 0 0 1 9.099.154l1.726.493c.446.127.845.354 1.176.651.331-.297.73-.524 1.176-.651l1.725-.493C17.363-.624 20.073 1.422 20.001 4v10.937a4.017 4.017 0 0 1-2.901 3.846l-3.451.986a5.994 5.994 0 0 1-3.296 0l-3.451-.986a4.017 4.017 0 0 1-2.901-3.846Zm9 2.936 3.549-1.013A2.01 2.01 0 0 0 18 14.937V4c0-.633-.29-1.215-.795-1.597a1.987 1.987 0 0 0-1.754-.327l-1.725.493A1.004 1.004 0 0 0 13 3.53v14.342Zm-7-2.936a2.01 2.01 0 0 0 1.451 1.923L11 17.873V3.531c0-.444-.298-.839-.725-.961l-1.726-.493a1.984 1.984 0 0 0-1.754.327A1.984 1.984 0 0 0 6 4.001v10.936Z" />
    </svg>
  );
});

BookOpenCover.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BookOpenCover.displayName = 'BookOpenCover';

export default BookOpenCover;
