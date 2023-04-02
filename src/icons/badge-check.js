import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const BadgeCheck = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M12 24a5.49 5.49 0 0 1-4.208-1.959c-1.54.176-3.127-.405-4.277-1.555a5.495 5.495 0 0 1-1.59-4.362C.714 15.16 0 13.626 0 12s.714-3.16 1.96-4.208c-.175-1.537.405-3.127 1.555-4.277a5.473 5.473 0 0 1 4.361-1.59C8.84.715 10.374 0 12 0s3.16.714 4.208 1.959c1.542-.173 3.127.405 4.277 1.555a5.495 5.495 0 0 1 1.59 4.362C23.286 8.84 24 10.374 24 12s-.714 3.16-1.96 4.208c.175 1.537-.405 3.127-1.555 4.277a5.503 5.503 0 0 1-4.361 1.59C15.16 23.285 13.626 24 12 24Zm-4.127-3.924c.561 0 1.081.241 1.448.676C9.989 21.545 10.965 22 12 22s2.011-.455 2.679-1.248c.403-.479.99-.721 1.616-.67a3.498 3.498 0 0 0 3.788-3.788 1.876 1.876 0 0 1 .67-1.617 3.496 3.496 0 0 0 0-5.356 1.878 1.878 0 0 1-.67-1.617c.088-1.033-.28-2.045-1.012-2.776s-1.748-1.094-2.775-1.012a1.872 1.872 0 0 1-1.617-.669c-.668-.793-1.644-1.248-2.679-1.248s-2.011.455-2.679 1.248a1.892 1.892 0 0 1-1.616.67 3.481 3.481 0 0 0-2.776 1.012 3.498 3.498 0 0 0-1.012 2.776 1.876 1.876 0 0 1-.67 1.617 3.496 3.496 0 0 0 0 5.356c.479.403.724.993.67 1.617a3.494 3.494 0 0 0 1.012 2.776 3.528 3.528 0 0 0 2.775 1.012c.057-.005.113-.007.169-.007Zm4.928-4.941 4.739-4.568a1 1 0 0 0-1.389-1.44l-4.752 4.581c-.391.391-1.022.391-1.44-.025l-2.278-2.117a1 1 0 0 0-1.361 1.465l2.252 2.092a2.999 2.999 0 0 0 2.126.879c.765 0 1.526-.289 2.104-.866Z" />
    </svg>
  );
});

BadgeCheck.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BadgeCheck.displayName = 'BadgeCheck';

export default BadgeCheck;
