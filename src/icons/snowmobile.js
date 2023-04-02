import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Snowmobile = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M23 19a1 1 0 0 0-1 1 2 2 0 0 1-2 2h-.382l-1.213-2.427a7 7 0 0 0 3.295-2.5l1.524-2.133a3.986 3.986 0 0 0-.815-5.494l-6.8-5.234a1 1 0 0 0-1.22 1.584l.557.429A11.673 11.673 0 0 1 16 10.183 2.919 2.919 0 0 1 13.032 13H11a1 1 0 0 0 0 2h2.032A4.937 4.937 0 0 0 18 10.135a8.092 8.092 0 0 0-.216-1.729l3.405 2.621a1.993 1.993 0 0 1 .408 2.746l-1.524 2.133A5.009 5.009 0 0 1 16 18H8.07l.692-1.24a1.984 1.984 0 0 0 .145-1.546 1.94 1.94 0 0 0-.949-1.154l-3.4-2a1 1 0 0 1-.5-1.255l2.047-3.252a1.006 1.006 0 0 1 1.342-.447c.131.065.488.255.975.516l-1.771 2.9a1 1 0 1 0 1.706 1.043l1.828-2.99c1.142.617 2.395 1.3 3.26 1.768a1 1 0 0 0 .955-1.76c-.22-.12-5.415-2.944-6.059-3.266a2.978 2.978 0 0 0-2.29-.163 2.907 2.907 0 0 0-1.686 1.418L2.317 9.826A2.986 2.986 0 0 0 3.6 13.819L7.008 15.8 5.78 18H3.535l-1.7-2.555a1 1 0 0 0-1.664 1.11l1.261 1.891A3.012 3.012 0 0 0 3 24h6a3.015 3.015 0 0 0 2.828-4H16c.125 0 .249 0 .373-.01L17.382 22H15a1 1 0 0 0 0 2h5a4 4 0 0 0 4-4 1 1 0 0 0-1-1Zm-13 2a1 1 0 0 1-1 1H3a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1ZM8 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1-5 0Z" />
  </svg>
));

Snowmobile.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Snowmobile.displayName = 'Snowmobile';

export default Snowmobile;
