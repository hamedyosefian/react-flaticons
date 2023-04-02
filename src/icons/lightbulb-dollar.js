import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const LightbulbDollar = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M17.994 2.286A9.046 9.046 0 0 0 10.956.059C6.904.517 3.59 3.782 3.075 7.822c-.374 2.931.644 5.76 2.793 7.761C7.243 16.862 8 18.483 8 20.149v.161A3.694 3.694 0 0 0 11.69 24h.619a3.694 3.694 0 0 0 3.69-3.69v-.549c0-1.486.687-2.906 1.932-3.998a8.991 8.991 0 0 0 .062-13.477ZM12.309 22h-.619c-.932 0-1.69-.758-1.69-1.69v-.161L9.998 20H14v.31c0 .932-.759 1.69-1.69 1.69Zm4.304-7.741c-1.177 1.032-1.998 2.34-2.376 3.741H9.689c-.42-1.431-1.258-2.765-2.458-3.881C5.56 12.563 4.768 10.36 5.06 8.076c.399-3.138 2.974-5.673 6.121-6.029.278-.031.554-.047.828-.047 1.725 0 3.353.617 4.652 1.778a6.993 6.993 0 0 1-.048 10.481ZM16 12c0 1.654-1.346 3-3 3v1a1 1 0 1 1-2 0v-1h-.268a3.01 3.01 0 0 1-2.598-1.499 1 1 0 1 1 1.73-1.001c.179.308.511.5.867.5h2.268c.552 0 1-.449 1-1a.768.768 0 0 0-.644-.76l-3.041-.507A2.761 2.761 0 0 1 7.999 8c0-1.654 1.346-3 3-3V4a1 1 0 1 1 2 0v1h.268c1.067 0 2.063.575 2.598 1.5a1 1 0 1 1-1.73 1.001 1.004 1.004 0 0 0-.867-.5H11c-.552 0-1 .449-1 1 0 .378.271.698.644.76l3.041.507A2.761 2.761 0 0 1 16 12.001Z" />
    </svg>
  );
});

LightbulbDollar.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

LightbulbDollar.displayName = 'LightbulbDollar';

export default LightbulbDollar;
