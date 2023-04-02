import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const BoxTissue = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M19.45 8.02c.249-2.698.55-6.029.55-6.393 0-.883-.643-1.591-1.463-1.611-.684-.02-1.36.408-2.146 1.336-.342.403-.679.646-.881.647-.253-.003-.829-.519-1.124-.783-.575-.517-1.373-1.227-2.387-1.217-1.037-.018-1.811.7-2.387 1.217-.295.265-.871.78-1.103.783-.224-.002-.561-.244-.901-.646C6.838.442 6.129.017 5.463.017 4.643.038 4 .746 4 1.628c0 .364.301 3.697.55 6.393A5.006 5.006 0 0 0 0 13v6c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5v-6a5.008 5.008 0 0 0-4.55-4.98ZM6.083 2.647C6.838 3.536 7.647 3.991 8.511 4c1.007-.011 1.786-.71 2.355-1.221.313-.281.893-.779 1.145-.779s.81.498 1.123.779c.569.511 1.349 1.21 2.377 1.221.842-.009 1.651-.464 2.407-1.354l.007-.009c-.156 1.86-.52 5.799-.77 8.445a.992.992 0 0 1-.995.917h-1.074l.243-2.917a.998.998 0 0 0-.913-1.079.984.984 0 0 0-1.079.913l-.257 3.083h-2.161l-.424-5.083c-.045-.551-.517-.974-1.079-.913a.998.998 0 0 0-.913 1.079l.41 4.917H7.839a.997.997 0 0 1-.997-.928c-.248-2.64-.611-6.578-.768-8.435l.008.01ZM19 22H5c-1.654 0-3-1.346-3-3h20c0 1.654-1.346 3-3 3Zm3-5H2v-4a3.004 3.004 0 0 1 2.735-2.988l.116 1.237A3.017 3.017 0 0 0 7.84 14h8.32c1.548 0 2.861-1.209 2.987-2.74l.117-1.247a3.003 3.003 0 0 1 2.735 2.988v4Z" />
  </svg>
));

BoxTissue.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BoxTissue.displayName = 'BoxTissue';

export default BoxTissue;