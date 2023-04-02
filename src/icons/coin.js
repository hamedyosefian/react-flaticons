import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Coin = forwardRef(({ color, size, ...rest }, ref) => {
  const iconContext = useContext(IconContext);

  const mergedProps = {
    color: color ?? iconContext.color ?? 'currentColor',
    size: size ?? iconContext.size ?? '20px',
    ...rest,
  };
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={mergedProps.size}
      height={mergedProps.size}
      viewBox="0 0 24 24"
      fill={mergedProps.color}
      {...mergedProps}
    >
      <path d="M12 2C5.271 2 0 4.855 0 8.5v7C0 19.145 5.271 22 12 22s12-2.855 12-6.5v-7C24 4.855 18.729 2 12 2ZM2 15.5v-3.36a9.03 9.03 0 0 0 1 .703v4.526c-.647-.6-1-1.244-1-1.868Zm1.01-2.651ZM7 19.366a13.034 13.034 0 0 1-2-.719v-4.835c.623.239 1.292.446 2 .617v4.936Zm4 .611a19.603 19.603 0 0 1-2-.193v-4.981c.646.087 1.314.146 2 .175v4.998Zm4-.193c-.635.095-1.303.16-2 .193v-4.998a21.937 21.937 0 0 0 2-.175v4.981Zm4-1.136a13.14 13.14 0 0 1-2 .719v-4.936a16.227 16.227 0 0 0 2-.617v4.835Zm1.989-5.798ZM22 15.501c0 .624-.353 1.268-1 1.868v-4.526a8.898 8.898 0 0 0 1-.703v3.36Zm-10-2.5c-5.893 0-10-2.372-10-4.5S6.107 4 12 4s10 2.372 10 4.5S17.893 13 12 13Z" />
    </svg>
  );
});

Coin.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Coin.displayName = 'Coin';

export default Coin;
