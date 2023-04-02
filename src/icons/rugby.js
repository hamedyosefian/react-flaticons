import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Rugby = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M22.1 1.9C18.664-1.531 9.372-.067 4.652 4.652S-1.531 18.664 1.9 22.1a8.106 8.106 0 0 0 5.767 1.88 17.434 17.434 0 0 0 11.681-4.632C24.066 14.629 25.531 5.336 22.1 1.9zm-5.767.1a6.232 6.232 0 0 1 4.351 1.314C21.7 4.331 22.111 6.3 21.959 8.545l-6.5-6.5c.295-.019.591-.045.874-.045zM3.316 20.684C2.3 19.669 1.889 17.7 2.041 15.455l6.5 6.5c-2.241.155-4.21-.255-5.225-1.271zm14.618-2.75a14.685 14.685 0 0 1-6.929 3.657l-8.6-8.6a14.674 14.674 0 0 1 3.661-6.925 14.645 14.645 0 0 1 6.94-3.646l8.586 8.586a14.674 14.674 0 0 1-3.658 6.928zm-.227-6.227a1 1 0 0 1-1.414 0L15 10.414 13.414 12l1.293 1.293a1 1 0 1 1-1.414 1.414L12 13.414 10.414 15l1.293 1.293a1 1 0 1 1-1.414 1.414l-4-4a1 1 0 0 1 1.414-1.414L9 13.586 10.586 12l-1.293-1.293a1 1 0 0 1 1.414-1.414L12 10.586 13.586 9l-1.293-1.293a1 1 0 0 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414z" />
  </svg>
));

Rugby.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Rugby.displayName = 'Rugby';

export default Rugby;
