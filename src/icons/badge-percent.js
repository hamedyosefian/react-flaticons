import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const BadgePercent = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M12 24a5.49 5.49 0 0 1-4.208-1.959c-1.54.177-3.127-.406-4.277-1.555a5.495 5.495 0 0 1-1.59-4.362C.714 15.16 0 13.626 0 12s.714-3.16 1.96-4.208c-.175-1.537.405-3.127 1.555-4.277a5.48 5.48 0 0 1 4.361-1.59C8.84.715 10.374 0 12 0s3.16.714 4.208 1.959c1.542-.176 3.127.406 4.277 1.555a5.495 5.495 0 0 1 1.59 4.362C23.286 8.84 24 10.374 24 12s-.714 3.16-1.96 4.208c.175 1.537-.405 3.127-1.555 4.277a5.493 5.493 0 0 1-4.361 1.59C15.16 23.285 13.626 24 12 24Zm-4.127-3.924c.561 0 1.081.241 1.448.676C9.989 21.545 10.965 22 12 22s2.011-.455 2.679-1.248c.403-.479.99-.721 1.616-.67a3.498 3.498 0 0 0 3.788-3.788 1.876 1.876 0 0 1 .67-1.617 3.496 3.496 0 0 0 0-5.356 1.878 1.878 0 0 1-.67-1.617c.088-1.033-.28-2.045-1.012-2.776s-1.748-1.096-2.775-1.012a1.87 1.87 0 0 1-1.617-.669c-.668-.793-1.644-1.248-2.679-1.248s-2.011.455-2.679 1.248a1.892 1.892 0 0 1-1.616.67 3.481 3.481 0 0 0-2.776 1.012 3.498 3.498 0 0 0-1.012 2.776 1.876 1.876 0 0 1-.67 1.617 3.496 3.496 0 0 0 0 5.356c.479.403.724.993.67 1.617a3.494 3.494 0 0 0 1.012 2.776 3.514 3.514 0 0 0 2.775 1.012c.057-.005.113-.007.169-.007ZM9 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm6 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-4.168 1.555 4-6a1 1 0 1 0-1.664-1.11l-4 6a1 1 0 1 0 1.664 1.11Z" />
    </svg>
  );
});

BadgePercent.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BadgePercent.displayName = 'BadgePercent';

export default BadgePercent;
