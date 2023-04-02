import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const FlagUsa = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M22.827 1.62a2.956 2.956 0 0 0-2.575-.521c-.356.095-.736.23-1.131.374-.715.259-1.454.526-2.121.526-1.36 0-3.071-.489-4.725-.962C10.488.527 8.64-.001 7-.001 4.945 0 2.937.813 1.614 1.496A2.98 2.98 0 0 0-.002 4.158V23a1 1 0 1 0 2 0v-7.437C2.89 15.053 4.979 14 7 14c1.36 0 3.071.489 4.725.962C13.512 15.472 15.36 16 17 16c1.803 0 3.712-.437 5.108-1.167 1.203-.63 1.892-1.644 1.892-2.78V4.004c0-.941-.428-1.811-1.173-2.384ZM11 6.756l.726.206C13.513 7.473 15.36 8 17 8c1.894 0 3.755-.633 5-1.174v1.79c-.918.465-2.988 1.385-5 1.385-1.36 0-3.071-.489-4.725-.962-.423-.121-.849-.242-1.275-.358V6.756ZM17 4c1.018 0 1.966-.343 2.802-.646.336-.122.659-.24.962-.32a.969.969 0 0 1 .843.172c.25.191.393.483.393.799v.611c-.918.465-2.988 1.385-5 1.385-1.36 0-3.07-.488-4.725-.961A84.833 84.833 0 0 0 11 4.682V2.757l.725.206c1.787.51 3.635 1.038 5.275 1.038ZM2.531 3.273C3.453 2.797 5.26 2 7 2c.609 0 1.287.098 2 .249v5.96A11.037 11.037 0 0 0 7 8c-1.893 0-3.75.699-5.002 1.303V4.158a.99.99 0 0 1 .533-.885Zm18.649 9.789C20.058 13.65 18.495 14 17 14c-1.36 0-3.071-.489-4.725-.962C10.488 12.528 8.64 12 7 12c-1.893 0-3.75.699-5.002 1.304v-1.74C2.89 11.054 4.979 10 7 10c1.36 0 3.071.489 4.725.962C13.512 11.472 15.36 12 17 12c1.894 0 3.755-.633 5-1.174v1.227c0 .479-.446.812-.82 1.009Z" />
    </svg>
  );
});

FlagUsa.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FlagUsa.displayName = 'FlagUsa';

export default FlagUsa;
