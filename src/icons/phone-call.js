import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const PhoneCall = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M13 1a1 1 0 0 1 1-1 10.011 10.011 0 0 1 10 10 1 1 0 0 1-2 0 8.009 8.009 0 0 0-8-8 1 1 0 0 1-1-1Zm1 5a4 4 0 0 1 4 4 1 1 0 0 0 2 0 6.006 6.006 0 0 0-6-6 1 1 0 0 0 0 2Zm9.093 10.739a3.1 3.1 0 0 1 0 4.378l-.91 1.049c-8.19 7.841-28.12-12.084-20.4-20.3l1.15-1a3.081 3.081 0 0 1 4.327.04c.031.031 1.884 2.438 1.884 2.438a3.1 3.1 0 0 1-.007 4.282L7.979 9.082a12.781 12.781 0 0 0 6.931 6.945l1.465-1.165a3.1 3.1 0 0 1 4.281-.006s2.406 1.852 2.437 1.883Zm-1.376 1.454s-2.393-1.841-2.424-1.872a1.1 1.1 0 0 0-1.549 0c-.027.028-2.044 1.635-2.044 1.635a1 1 0 0 1-.979.152A15.009 15.009 0 0 1 5.9 9.3a1 1 0 0 1 .145-1s1.607-2.018 1.634-2.044a1.1 1.1 0 0 0 0-1.549c-.031-.03-1.872-2.425-1.872-2.425a1.1 1.1 0 0 0-1.51.039l-1.15 1C-2.495 10.105 14.776 26.418 20.721 20.8l.911-1.05a1.121 1.121 0 0 0 .085-1.557Z" />
  </svg>
));

PhoneCall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PhoneCall.displayName = 'PhoneCall';

export default PhoneCall;
