import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Snowflakes = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M510.533 85.763c0 11.713-9.496 21.209-21.209 21.209h-37.625l18.706 32.641c5.857 10.161 2.367 23.147-7.794 29.003-10.161 5.857-23.147 2.367-29.003-7.794l-18.516-32.407-18.516 32.301c-5.857 10.161-18.842 13.651-29.003 7.794-10.161-5.857-13.651-18.842-7.794-29.003l18.706-32.535H340.86c-11.713 0-21.209-9.496-21.209-21.209s9.496-21.209 21.209-21.209h37.625l-18.706-32.641c-5.857-10.161-2.367-23.147 7.794-29.003 10.161-5.857 23.147-2.367 29.003 7.794l18.516 32.407 18.516-32.301C439.465.649 452.45-2.841 462.611 3.016s13.651 18.842 7.794 29.003l-18.706 32.535h37.625c11.714 0 21.209 9.495 21.209 21.209zm-205.728 190.33-31.347 18.219a85.203 85.203 0 0 1 0 49.502l31.347 18.219a48.567 48.567 0 0 1 14.019-6.363l37.752-9.968c11.327-2.987 22.931 3.774 25.917 15.101s-3.774 22.931-15.101 25.917l-37.71 9.968a5.28 5.28 0 0 0-3.733 6.363l9.968 37.752c3.318 11.234-3.099 23.03-14.333 26.348-11.234 3.318-23.03-3.1-26.348-14.333a21.531 21.531 0 0 1-.316-1.198l-9.968-37.71a47.904 47.904 0 0 1-1.485-15.313l-32.174-18.728a84.632 84.632 0 0 1-37.773 21.209v37.964a47.103 47.103 0 0 1 12.492 8.971l27.572 27.572c8.317 8.252 8.369 21.684.117 30-8.252 8.316-21.684 8.369-30 .117L196.13 478.13a5.24 5.24 0 0 0-7.409-.015l-.015.015-27.572 27.572c-8.276 8.293-21.707 8.307-30 .032-8.293-8.276-8.307-21.707-.032-30l27.572-27.572a47.103 47.103 0 0 1 12.513-8.993v-37.964a84.627 84.627 0 0 1-37.773-21.209l-32.217 18.706a47.904 47.904 0 0 1-1.485 15.313l-9.968 37.71c-2.656 11.408-14.058 18.503-25.466 15.847-11.408-2.656-18.503-14.058-15.847-25.466.094-.402.199-.802.316-1.198l9.968-37.731a5.281 5.281 0 0 0-3.733-6.363l-37.71-9.968C5.947 383.86-.814 372.256 2.173 360.929s14.591-18.088 25.917-15.101l37.731 9.968a48.426 48.426 0 0 1 14.04 6.363l31.347-18.219a85.203 85.203 0 0 1 0-49.502l-31.22-18.346a48.567 48.567 0 0 1-14.019 6.363l-37.752 9.968c-11.326 2.988-22.93-3.773-25.917-15.1s3.774-22.931 15.101-25.917l37.71-9.968a5.28 5.28 0 0 0 3.733-6.363l-9.968-37.752c-3.318-11.234 3.1-23.03 14.333-26.348s23.03 3.1 26.348 14.333c.117.396.222.796.316 1.198l9.968 37.71a47.904 47.904 0 0 1 1.485 15.313l32.174 18.728a84.84 84.84 0 0 1 37.667-21.209l-.17-36.055a47.057 47.057 0 0 1-12.535-9.184l-27.572-27.572c-8.804-7.727-9.677-21.127-1.95-29.931s21.127-9.677 29.931-1.95a21.224 21.224 0 0 1 1.861 1.849l27.572 27.572a5.281 5.281 0 0 0 7.444 0l27.572-27.572c8.293-8.287 21.734-8.283 30.021.011 8.287 8.293 8.283 21.734-.011 30.021l-27.593 27.572a47.351 47.351 0 0 1-12.407 8.929l.276 36.14a84.833 84.833 0 0 1 37.858 21.209l32.174-18.728a47.904 47.904 0 0 1 1.485-15.313l9.968-37.71c2.656-11.408 14.058-18.503 25.466-15.847 11.408 2.656 18.503 14.058 15.847 25.466-.094.402-.199.802-.316 1.198l-9.968 37.731a5.282 5.282 0 0 0 3.733 6.363l37.71 9.968c11.327 2.987 18.088 14.591 15.101 25.917s-14.591 18.088-25.917 15.101l-37.731-9.968a48.457 48.457 0 0 1-14.211-6.172zm-69.99 42.969c0-23.427-18.991-42.418-42.418-42.418s-42.418 18.991-42.418 42.418 18.991 42.418 42.418 42.418 42.418-18.991 42.418-42.418z" />
    </svg>
  );
});

Snowflakes.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Snowflakes.displayName = 'Snowflakes';

export default Snowflakes;
