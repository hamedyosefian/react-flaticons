import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const GlassCheers = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M23.955 21.319a1 1 0 0 0-1.252-.658l-1.3.4-.931-2.737a4.953 4.953 0 0 0 2.328-5.717l-1.843-5.475A3.023 3.023 0 0 0 17.28 5.11l-3.852 1.074A2.966 2.966 0 0 0 12 7.078a2.966 2.966 0 0 0-1.428-.894L6.719 5.11A3.008 3.008 0 0 0 3.052 7.1l-1.867 5.557a4.956 4.956 0 0 0 2.364 5.682l-.944 2.728-1.305-.406a1 1 0 1 0-.6 1.91l2.16.671c.015 0 .024.017.039.023s.052.006.078.013l2.181.677a1 1 0 0 0 .594-1.91l-1.236-.385.935-2.7a4.982 4.982 0 0 0 .559.04 5 5 0 0 0 4.79-3.608l1.2-3.556 1.183 3.5A5 5 0 0 0 17.99 19a4.917 4.917 0 0 0 .581-.04l.918 2.7-1.244.386a1 1 0 0 0 .594 1.91l2.175-.675c.026-.007.053 0 .079-.013s.026-.019.042-.025l2.162-.671a1 1 0 0 0 .658-1.253ZM13.357 8.592a.989.989 0 0 1 .608-.482l3.851-1.073A1 1 0 0 1 18.08 7a1.023 1.023 0 0 1 .972.739L19.813 10H13.49l-.215-.637a1 1 0 0 1 .082-.771ZM5.918 7a1.007 1.007 0 0 1 .265.036l3.852 1.074a1 1 0 0 1 .7 1.223L10.51 10H4.187l.77-2.29A1.008 1.008 0 0 1 5.918 7Zm2.974 7.8a3 3 0 0 1-5.5.669 2.949 2.949 0 0 1-.292-2.224L3.514 12h6.322Zm7.632 1.808a3.022 3.022 0 0 1-1.431-1.859L14.164 12h6.323l.4 1.194a3 3 0 0 1-4.366 3.418ZM15.553 3.9a1 1 0 0 0 1.347-.453l1-2a1 1 0 1 0-1.79-.894l-1 2a1 1 0 0 0 .443 1.347ZM7.105 3.447A1 1 0 1 0 8.9 2.553l-1-2a1 1 0 0 0-1.79.894ZM12 4a1 1 0 0 0 1-1V1a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1Z" />
    </svg>
  );
});

GlassCheers.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

GlassCheers.displayName = 'GlassCheers';

export default GlassCheers;
