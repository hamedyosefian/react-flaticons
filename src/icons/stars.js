import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Stars = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M14.4 24a2.807 2.807 0 0 1-1.671-.559l-2.735-2.167-2.713 2.144a2.816 2.816 0 0 1-3.351.036A2.776 2.776 0 0 1 2.9 20.3l.946-3.276-2.681-1.919A2.821 2.821 0 0 1 2.822 10h3.432L7.3 6.606a2.835 2.835 0 0 1 5.38-.006l1.052 3.4h3.433a2.821 2.821 0 0 1 1.666 5.1l-2.677 1.924.947 3.309a2.769 2.769 0 0 1-1.044 3.123A2.826 2.826 0 0 1 14.4 24Zm-4.41-5a1 1 0 0 1 .62.216l3.332 2.634a.764.764 0 0 0 .942-.018.772.772 0 0 0 .3-.919L14.038 16.9a1 1 0 0 1 .378-1.085l3.24-2.331A.821.821 0 0 0 17.165 12H13a1 1 0 0 1-.955-.7l-1.273-4.1a.823.823 0 0 0-1.561.01L7.947 11.3a1 1 0 0 1-.955.7h-4.17a.822.822 0 0 0-.485 1.485l3.245 2.324a1 1 0 0 1 .379 1.09l-1.152 3.985a.784.784 0 0 0 .292.948.807.807 0 0 0 .967 0l3.306-2.612a.993.993 0 0 1 .62-.22ZM20 7.146l1.481 1.089a.809.809 0 0 0 1.25-.9l-.572-1.771 1.506-1.1A.809.809 0 0 0 23.188 3h-1.854l-.563-1.756a.813.813 0 0 0-1.542 0L18.666 3h-1.853a.809.809 0 0 0-.478 1.463l1.506 1.1-.572 1.771a.788.788 0 0 0 .3.906.8.8 0 0 0 .953-.005Z" />
    </svg>
  );
});

Stars.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Stars.displayName = 'Stars';

export default Stars;
