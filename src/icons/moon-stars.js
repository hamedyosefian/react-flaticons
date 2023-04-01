import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const MoonStars = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M12.009 24A12.067 12.067 0 0 1 .075 10.725 12.121 12.121 0 0 1 10.1.152a13 13 0 0 1 5.03.206 2.5 2.5 0 0 1 1.8 1.8 2.47 2.47 0 0 1-.7 2.425c-4.559 4.168-4.165 10.645.807 14.412a2.5 2.5 0 0 1-.7 4.319 13.875 13.875 0 0 1-4.328.686Zm.074-22a10.776 10.776 0 0 0-1.675.127 10.1 10.1 0 0 0-8.344 8.8A9.928 9.928 0 0 0 4.581 18.7a10.473 10.473 0 0 0 11.093 2.734.5.5 0 0 0 .138-.856C9.883 16.1 9.417 8.087 14.865 3.124a.459.459 0 0 0 .127-.465.491.491 0 0 0-.356-.362A10.68 10.68 0 0 0 12.083 2ZM20.5 12a1 1 0 0 1-.97-.757l-.358-1.43-1.432-.385a1 1 0 0 1 .035-1.94l1.4-.325.351-1.406a1 1 0 0 1 1.94 0l.355 1.418 1.418.355a1 1 0 0 1 0 1.94l-1.418.355-.355 1.418A1 1 0 0 1 20.5 12ZM16 14a1 1 0 0 0 2 0 1 1 0 0 0-2 0Zm6 4a1 1 0 0 0 2 0 1 1 0 0 0-2 0Z" />
    </svg>
  );
});

MoonStars.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MoonStars.displayName = 'MoonStars';

export default MoonStars;
