import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Gears = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="m22.73 19.05-.98-.55c.15-.48.26-.98.26-1.5s-.1-1.03-.26-1.5l.98-.55c.48-.27.65-.88.39-1.36-.27-.48-.88-.66-1.36-.39l-.98.55a5.037 5.037 0 0 0-2.77-1.65V11c0-.55-.45-1-1-1s-1 .45-1 1v1.1c-1.1.22-2.06.83-2.77 1.65l-.98-.55a.994.994 0 0 0-1.36.39c-.27.48-.1 1.09.39 1.36l.98.55c-.15.48-.26.98-.26 1.5s.1 1.03.26 1.5l-.98.55c-.48.27-.65.88-.39 1.36.18.33.52.51.87.51.17 0 .33-.04.49-.13l.98-.55c.71.82 1.67 1.42 2.77 1.65v1.1c0 .55.45 1 1 1s1-.45 1-1v-1.1c1.1-.22 2.06-.83 2.77-1.65l.98.55c.15.09.32.13.49.13.35 0 .69-.18.87-.51.27-.48.1-1.09-.39-1.36ZM17 20c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3Zm-6.23-9.75.98.55c.15.09.32.13.49.13.35 0 .69-.18.87-.51.27-.48.1-1.09-.39-1.36l-.98-.55c.15-.48.26-.98.26-1.5s-.1-1.03-.26-1.5l.98-.55c.48-.27.65-.88.39-1.36-.27-.48-.88-.66-1.36-.39l-.98.55A5.037 5.037 0 0 0 8 2.11V1c0-.55-.45-1-1-1S6 .45 6 1v1.1c-1.1.22-2.06.83-2.77 1.65l-.98-.55a.994.994 0 0 0-1.36.39c-.27.48-.1 1.09.39 1.36l.98.55C2.11 5.98 2 6.48 2 7s.1 1.03.26 1.5l-.98.55c-.48.27-.65.88-.39 1.36.18.33.52.51.87.51.17 0 .33-.04.49-.13l.98-.55c.71.82 1.67 1.42 2.77 1.65v1.1c0 .55.45 1 1 1s1-.45 1-1v-1.1c1.1-.22 2.06-.83 2.77-1.65ZM7 10c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3Z" />
    </svg>
  );
});

Gears.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Gears.displayName = 'Gears';

export default Gears;
