import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Rocket = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M18 7a1 1 0 1 1-1-1 1 1 0 0 1 1 1Zm-4 2a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm-3 3a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm12.866-9.042-.075.211C22.289 7.337 20.848 11.3 18 14.82V15a11.02 11.02 0 0 1-3.6 8.135 3.264 3.264 0 0 1-2.2.865A3.21 3.21 0 0 1 9 20.794v-1.151a4.951 4.951 0 0 1-1.961-1.191L7 18.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L5.586 17l-.039-.038A4.98 4.98 0 0 1 4.353 15h-.99A3.366 3.366 0 0 1 0 11.638 3.4 3.4 0 0 1 .938 9.3 10.922 10.922 0 0 1 9 6h.18C12.7 3.153 16.66 1.712 20.826.211l.216-.077a2.2 2.2 0 0 1 2.824 2.824ZM3.363 13H4.1a5 5 0 0 1 .891-2.45A25.362 25.362 0 0 1 6.8 8.244a8.507 8.507 0 0 0-4.4 2.426 1.407 1.407 0 0 0-.4.968A1.364 1.364 0 0 0 3.363 13ZM15.7 17.252a25.552 25.552 0 0 1-2.252 1.759 4.983 4.983 0 0 1-2.448.876v.907A1.208 1.208 0 0 0 12.207 22a1.271 1.271 0 0 0 .852-.345 9 9 0 0 0 2.641-4.403Zm6.237-15.189a.191.191 0 0 0-.217-.048l-.215.078c-4.844 1.745-9.027 3.253-12.629 6.854A20.867 20.867 0 0 0 6.628 11.7a3 3 0 0 0 .333 3.851l1.492 1.49a3 3 0 0 0 3.849.334 20.817 20.817 0 0 0 2.751-2.248c3.6-3.6 5.11-7.787 6.856-12.633l.076-.211a.192.192 0 0 0-.048-.22Z" />
    </svg>
  );
});

Rocket.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Rocket.displayName = 'Rocket';

export default Rocket;
