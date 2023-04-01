import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Paw = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M8.164 8a2.5 2.5 0 0 1-1.579-.594 4.833 4.833 0 0 1-1.557-3.261C4.785 1.652 6.145.181 7.614.017A2.655 2.655 0 0 1 9.6.611a4.179 4.179 0 0 1 1.376 2.9C11.2 5.835 10.128 8 8.164 8Zm-.328-6c-.577.064-.921.883-.817 1.946a2.868 2.868 0 0 0 .826 1.9A.539.539 0 0 0 8.2 6c.351-.039.916-.941.783-2.3C8.641 1.834 7.861 2 7.836 2.005ZM3.164 14a2.5 2.5 0 0 1-1.579-.594 4.833 4.833 0 0 1-1.557-3.261c-.243-2.493 1.117-3.964 2.586-4.128a2.663 2.663 0 0 1 1.986.594 4.179 4.179 0 0 1 1.376 2.9C6.2 11.835 5.077 14 3.164 14Zm-.328-6c-.577.064-.921.883-.817 1.946a2.868 2.868 0 0 0 .826 1.9A.557.557 0 0 0 3.2 12c.351-.039.916-.941.783-2.3C3.718 7.872 2.861 8 2.836 8.005Zm13 0c-1.708.012-3.034-2.166-2.807-4.492a4.179 4.179 0 0 1 1.376-2.9 2.659 2.659 0 0 1 1.981-.591c1.469.164 2.829 1.635 2.586 4.128a4.833 4.833 0 0 1-1.557 3.262A2.5 2.5 0 0 1 15.836 8Zm-.816-4.3c-.133 1.355.432 2.257.783 2.3a.553.553 0 0 0 .352-.145 2.868 2.868 0 0 0 .826-1.9c.21-2.621-1.781-2.45-1.961-.255ZM20.836 14c-1.862 0-3.034-2.166-2.807-4.492a4.179 4.179 0 0 1 1.376-2.9 2.653 2.653 0 0 1 1.981-.594c1.469.164 2.829 1.635 2.586 4.128a4.833 4.833 0 0 1-1.557 3.262 2.5 2.5 0 0 1-1.579.596Zm-.816-4.3c-.133 1.355.432 2.257.783 2.3a.574.574 0 0 0 .352-.145 2.868 2.868 0 0 0 .826-1.9c.1-1.063-.24-1.882-.817-1.946C21.139 8 20.115 7.911 20.02 9.7ZM16 24a4.853 4.853 0 0 1-2.447-.606 3.332 3.332 0 0 0-3.106 0C7.434 25.083 3.922 23.227 4 19c0-4.635 4.507-9 8-9s8 4.364 8 9c0 2.944-1.645 5-4 5Zm-4-3a4.865 4.865 0 0 1 2.447.605C16.684 22.823 18.035 21.172 18 19c0-3.38-3.521-7-6-7s-6 3.62-6 7c-.032 2.169 1.308 3.823 3.553 2.605A4.865 4.865 0 0 1 12 21Z" />
    </svg>
  );
});

Paw.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Paw.displayName = 'Paw';

export default Paw;
