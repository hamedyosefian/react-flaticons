import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ChildHead = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M24 11.5a3.5 3.5 0 0 0-2.149-3.226 10 10 0 0 0-19.7 0 3.5 3.5 0 0 0 1.119 6.718 10.607 10.607 0 0 0 2.071 2.955 8.908 8.908 0 0 0-2.272 4.928 1 1 0 0 0 .868 1.117 1.093 1.093 0 0 0 .124.008 1 1 0 0 0 .991-.875 6.924 6.924 0 0 1 1.815-3.872A8.948 8.948 0 0 0 12 21a8.94 8.94 0 0 0 5.119-1.74 6.922 6.922 0 0 1 1.808 3.862 1 1 0 0 0 .991.876 1.063 1.063 0 0 0 .125-.008 1 1 0 0 0 .868-1.116 8.9 8.9 0 0 0-2.261-4.918 10.622 10.622 0 0 0 2.082-2.966A3.5 3.5 0 0 0 24 11.5Zm-3.752 1.473a.993.993 0 0 0-1.117.651C18.215 16.222 15.13 19 12 19s-6.215-2.78-7.131-5.378a.994.994 0 0 0-1.117-.651A1.606 1.606 0 0 1 3.5 13a1.5 1.5 0 0 1-.27-2.972 1 1 0 0 0 .816-.878A7.961 7.961 0 0 1 8.13 3a4.075 4.075 0 0 0-.022 1.942 4 4 0 0 0 7.688.318.977.977 0 0 0-.945-1.26H14.7a.867.867 0 0 0-.806.631A2 2 0 1 1 12 2a7.978 7.978 0 0 1 7.954 7.15 1 1 0 0 0 .816.878A1.5 1.5 0 0 1 20.5 13a1.606 1.606 0 0 1-.252-.027Z" />
      <circle cx="9.5" cy="11.5" r="1.5" />
      <circle cx="14.5" cy="11.5" r="1.5" />
    </svg>
  );
});

ChildHead.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ChildHead.displayName = 'ChildHead';

export default ChildHead;
