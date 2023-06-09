import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Navigation = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M13.987 6.108c-.039.011-7.228 2.864-7.228 2.864a2.76 2.76 0 0 0 .2 5.212l2.346.587.773 2.524A2.739 2.739 0 0 0 12.617 19h.044a2.738 2.738 0 0 0 2.532-1.786s2.693-7.165 2.7-7.2a3.2 3.2 0 0 0-3.908-3.907Zm1.983 3.359-2.648 7.043a.738.738 0 0 1-.692.49c-.1-.012-.525-.026-.675-.378l-.908-2.976a1 1 0 0 0-.713-.679l-2.818-.7a.762.762 0 0 1-.027-1.433l7.06-2.8a1.149 1.149 0 0 1 1.094.32 1.19 1.19 0 0 1 .327 1.113ZM12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0Zm0 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1-10 10Z" />
    </svg>
  );
});

Navigation.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Navigation.displayName = 'Navigation';

export default Navigation;
