import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const TireFlat = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M21.566 19.229c6-7.7.2-19.354-9.566-19.229C2.286-.176-3.583 11.59 2.441 19.235A2.51 2.51 0 0 0 3.5 24h17a2.513 2.513 0 0 0 1.066-4.771ZM20.5 22h-17a.5.5 0 1 1 .053-1 1.452 1.452 0 0 0 1.416-1c.162-.638-.224-1.1-.672-1.633C-1.1 12.017 3.669 1.9 12 2c8.357-.094 13.121 10.045 7.662 16.411-.409.487-.795.947-.631 1.583A1.474 1.474 0 0 0 20.5 21a.5.5 0 0 1 0 1ZM12 4a8.009 8.009 0 0 0-8 8c.376 10.588 15.626 10.585 16 0a8.009 8.009 0 0 0-8-8Zm-.834 9.086a4.192 4.192 0 0 0-.144-.813 4.246 4.246 0 0 0-.3-.764A3.594 3.594 0 0 0 12 10.653a3.614 3.614 0 0 0 .581.49 3.555 3.555 0 0 0 .7.366 4.192 4.192 0 0 0-.442 1.577 4.11 4.11 0 0 0-1.673 0Zm5.954-4.212-1.426.571-.5.2A1.6 1.6 0 0 1 13 8.163V6.084a6.016 6.016 0 0 1 4.12 2.79ZM11 6.084v2.079a1.6 1.6 0 0 1-2.19 1.483l-1.93-.772A6.016 6.016 0 0 1 11 6.084ZM6 12a6.031 6.031 0 0 1 .135-1.269l1.7.681a2.128 2.128 0 0 1 .917 3.249l-1.1 1.469A5.978 5.978 0 0 1 6 12Zm3.251 5.332L10.4 15.8a2.059 2.059 0 0 1 3.2 0l1.148 1.532a6.043 6.043 0 0 1-5.497 0Zm7.1-1.2-1.1-1.464a2.129 2.129 0 0 1 .914-3.255l1.7-.681a6.028 6.028 0 0 1-1.517 5.399Z" />
    </svg>
  );
});

TireFlat.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TireFlat.displayName = 'TireFlat';

export default TireFlat;
