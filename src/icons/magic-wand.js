import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const MagicWand = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M18 9.064a3.049 3.049 0 0 0-.9-2.164 3.139 3.139 0 0 0-4.334 0L.9 18.769A3.064 3.064 0 0 0 5.23 23.1L17.1 11.231a3.047 3.047 0 0 0 .9-2.167zM3.816 21.688a1.087 1.087 0 0 1-1.5 0 1.062 1.062 0 0 1 0-1.5l7.769-7.77 1.505 1.505zM15.688 9.816 13 12.505 11.5 11l2.689-2.688a1.063 1.063 0 1 1 1.5 1.5zM4.863 2.855l1.55-.442.442-1.55a1.191 1.191 0 0 1 2.29 0l.442 1.55 1.55.442a1.191 1.191 0 0 1 0 2.29l-1.55.442-.442 1.55a1.191 1.191 0 0 1-2.29 0l-.442-1.55-1.55-.442a1.191 1.191 0 0 1 0-2.29zm18.274 14.29-1.55.442-.442 1.55a1.191 1.191 0 0 1-2.29 0l-.442-1.55-1.55-.442a1.191 1.191 0 0 1 0-2.29l1.55-.442.442-1.55a1.191 1.191 0 0 1 2.29 0l.442 1.55 1.55.442a1.191 1.191 0 0 1 0 2.29zM17.755 2.5l1.356-.387L19.5.755a1.042 1.042 0 0 1 2 0l.387 1.356 1.356.387a1.042 1.042 0 0 1 0 2l-1.356.387-.387 1.359a1.042 1.042 0 0 1-2 0l-.387-1.355-1.358-.389a1.042 1.042 0 0 1 0-2z" />
    </svg>
  );
});

MagicWand.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MagicWand.displayName = 'MagicWand';

export default MagicWand;
