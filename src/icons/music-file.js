import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const MusicFile = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M15 12a1 1 0 0 1-1 1h-1v4.5a2.5 2.5 0 1 1-2.5-2.5 2.577 2.577 0 0 1 .5.05V13a2 2 0 0 1 2-2h1a1 1 0 0 1 1 1zm7-1.515V19a5.006 5.006 0 0 1-5 5H7a5.006 5.006 0 0 1-5-5V5a5.006 5.006 0 0 1 5-5h4.515a6.955 6.955 0 0 1 4.95 2.051l3.484 3.484A6.955 6.955 0 0 1 22 10.485zm-6.949-7.02A4.989 4.989 0 0 0 14 2.684V7a1 1 0 0 0 1 1h4.316a4.989 4.989 0 0 0-.781-1.051zM20 10.485c0-.165-.032-.323-.047-.485H15a3 3 0 0 1-3-3V2.047c-.162-.015-.32-.047-.485-.047H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3z" />
    </svg>
  );
});

MusicFile.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MusicFile.displayName = 'MusicFile';

export default MusicFile;
