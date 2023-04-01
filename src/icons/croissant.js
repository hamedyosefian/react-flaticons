import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Croissant = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M22.375 3.785a13.448 13.448 0 0 0-4.847-1.639A4.013 4.013 0 0 0 16.473.862a3.966 3.966 0 0 0-3.391-.753A17.955 17.955 0 0 0 9.463 1.45a4.666 4.666 0 0 0-5.063.691c-.367.315-.736.644-1.1.983-.382.359-.771.767-1.159 1.21a4.655 4.655 0 0 0-1.03 4.12 4.753 4.753 0 0 0 .341.984A18.173 18.173 0 0 0 .1 13.082a3.958 3.958 0 0 0 .753 3.391 4 4 0 0 0 1.3 1.062 13.45 13.45 0 0 0 1.638 4.84 3.168 3.168 0 0 0 3.431 1.557 3.259 3.259 0 0 0 2.61-2.876A16.488 16.488 0 0 1 10.84 17.3s.545-.336.794-.539a3.717 3.717 0 0 0 1.216-1.941 3.141 3.141 0 0 0 1.228-.755 3.176 3.176 0 0 0 .744-1.211 3.715 3.715 0 0 0 1.934-1.215c.2-.249.54-.795.54-.795a15.346 15.346 0 0 1 3.76-1.013 3.259 3.259 0 0 0 2.876-2.61 3.161 3.161 0 0 0-1.557-3.436ZM7.839 20.833a1.274 1.274 0 0 1-1.027 1.14 1.169 1.169 0 0 1-1.291-.59A11.5 11.5 0 0 1 4.244 18h3.9c.109 0 .215-.022.323-.028-.286.883-.628 2.857-.628 2.861Zm2.53-5.626A3.525 3.525 0 0 1 8.146 16H4a2 2 0 0 1-1.579-.767 1.973 1.973 0 0 1-.377-1.689 14.866 14.866 0 0 1 .8-2.359 4.652 4.652 0 0 0 1.006.6l6.677 2.924c.062.029.128.04.191.064a1.567 1.567 0 0 1-.349.434Zm2.285-2.552a1.151 1.151 0 0 1-1.308.234L4.653 9.958a2.75 2.75 0 0 1-1.585-1.941 2.675 2.675 0 0 1 .586-2.368c.346-.394.688-.754 1.023-1.069s.682-.625 1.027-.92a2.685 2.685 0 0 1 4.226.957l2.964 6.69a1.222 1.222 0 0 1-.24 1.348ZM16 8.146a3.524 3.524 0 0 1-.792 2.223 1.585 1.585 0 0 1-.411.339c-.026-.07-.045-.142-.075-.211l-2.963-6.689a4.811 4.811 0 0 0-.562-.957 14.914 14.914 0 0 1 2.347-.8 1.971 1.971 0 0 1 1.689.377A2 2 0 0 1 16 4.011Zm5.973-1.334a1.274 1.274 0 0 1-1.14 1.027s-1.978.342-2.861.63c.007-.108.028-.214.028-.323v-3.9a11.5 11.5 0 0 1 3.383 1.277 1.172 1.172 0 0 1 .59 1.289Z" />
    </svg>
  );
});

Croissant.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Croissant.displayName = 'Croissant';

export default Croissant;
