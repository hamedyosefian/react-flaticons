import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CommentsDollar = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M24 16v5a3 3 0 0 1-3 3h-5c-2.955 0-5.535-1.615-6.92-4.004a10.968 10.968 0 0 0 2.242-.248A5.988 5.988 0 0 0 16 22h5a1 1 0 0 0 1-1v-5a5.988 5.988 0 0 0-2.252-4.678c.156-.724.242-1.473.248-2.242C22.385 10.465 24 13.045 24 16ZM8.703 18H3c-1.493 0-3-1.134-3-3.666v-5.04C0 4.588 3.823.342 8.349.023a9.032 9.032 0 0 1 7.015 2.613 9.013 9.013 0 0 1 2.613 7.015C17.658 14.177 13.411 18 8.703 18Zm0-2c.071 0 .143-.002.214-.004A1 1 0 0 1 8 15v-1h-.268a3.01 3.01 0 0 1-2.598-1.499A1 1 0 0 1 6.865 11.5c.178.308.511.5.867.5H10c.551 0 1-.449 1-1a.768.768 0 0 0-.644-.76l-3.042-.507A2.762 2.762 0 0 1 4.999 7c0-1.654 1.346-3 3-3V3a1 1 0 0 1 .976-.999c-.162 0-.323.006-.486.017-3.518.249-6.49 3.58-6.49 7.276v5.04c0 .391.072 1.666 1 1.666h5.703Zm7.279-6.49a7.015 7.015 0 0 0-2.032-5.46 7.011 7.011 0 0 0-4.9-2.049A1 1 0 0 1 10 3v1h.268c1.067 0 2.063.575 2.598 1.5a1 1 0 0 1-1.731 1.001 1.004 1.004 0 0 0-.867-.5H8c-.551 0-1 .449-1 1 0 .378.271.698.644.76l3.042.507a2.762 2.762 0 0 1 2.315 2.733c0 1.654-1.346 3-3 3v1a1 1 0 0 1-.817.983c3.501-.243 6.561-3.108 6.799-6.473Z" />
  </svg>
));

CommentsDollar.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CommentsDollar.displayName = 'CommentsDollar';

export default CommentsDollar;
