import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Noodles = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M24 6a1 1 0 0 1-1 1H12.456c-.315.451-.71 1.032-.29 1.555a4.011 4.011 0 0 1 0 4.889.944.944 0 0 0 0 1.111 4.011 4.011 0 0 1 0 4.889.944.944 0 0 0 0 1.111c.705.89 1.559 3.246-.166 3.445-1.329-.037-.758-1.509-1.416-2.222a2.945 2.945 0 0 1 0-3.557 2 2 0 0 0 0-2.443 2.945 2.945 0 0 1 0-3.557 2 2 0 0 0 0-2.443A2.944 2.944 0 0 1 10.164 7H8.472c-.316.452-.711 1.031-.291 1.556a4.012 4.012 0 0 1 0 4.889.947.947 0 0 0 0 1.111 4.012 4.012 0 0 1 0 4.889.947.947 0 0 0 0 1.111c.705.887 1.559 3.244-.166 3.444-1.341-.049-.75-1.5-1.416-2.221a2.945 2.945 0 0 1 0-3.557 2 2 0 0 0 0-2.443 2.945 2.945 0 0 1 0-3.557 2 2 0 0 0 0-2.443A2.946 2.946 0 0 1 6.18 7H4.456c-.315.451-.71 1.032-.29 1.555a4.012 4.012 0 0 1 0 4.889.942.942 0 0 0 0 1.111 4.012 4.012 0 0 1 0 4.889.942.942 0 0 0 0 1.111C4.871 21.445 5.725 23.8 4 24c-1.329-.037-.758-1.509-1.416-2.222a2.945 2.945 0 0 1 0-3.557 2 2 0 0 0 0-2.443 2.945 2.945 0 0 1 0-3.557 2 2 0 0 0 0-2.443A2.944 2.944 0 0 1 2.164 7H1a1 1 0 0 1 0-2h22a1 1 0 0 1 1 1ZM1 4c.042.013 22.03-2 22.092-2a1 1 0 0 0-.183-2L.91 2A1 1 0 0 0 1 4Z" />
    </svg>
  );
});

Noodles.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Noodles.displayName = 'Noodles';

export default Noodles;
