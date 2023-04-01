import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Bahai = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M23.968 10.229a2.06 2.06 0 0 0-1.288-1.572l-2.561-1.004.412-2.72a2.064 2.064 0 0 0-.719-1.903 2.074 2.074 0 0 0-1.999-.377l-2.606.878-1.433-2.349c-.744-1.312-2.804-1.312-3.548 0L8.793 3.53l-2.606-.877a2.066 2.066 0 0 0-1.999.376 2.061 2.061 0 0 0-.719 1.903l.412 2.72-2.56 1.003a2.064 2.064 0 0 0-1.289 1.573 2.066 2.066 0 0 0 .672 1.921l2.062 1.819-1.316 2.414c-.35.641-.34 1.401.025 2.033a2.063 2.063 0 0 0 1.749 1.039l2.75.067.543 2.694c.144.716.64 1.292 1.325 1.542a2.063 2.063 0 0 0 2.009-.328L12 21.713l2.149 1.717a2.061 2.061 0 0 0 2.008.327 2.062 2.062 0 0 0 1.325-1.541l.543-2.695 2.75-.067a2.066 2.066 0 0 0 1.749-1.039 2.061 2.061 0 0 0 .025-2.033l-1.316-2.414 2.063-1.819a2.067 2.067 0 0 0 .671-1.921Zm-4.656 2.768a1 1 0 0 0-.217 1.229l1.698 3.115-.066.115-3.547.087a1.002 1.002 0 0 0-.956.802l-.702 3.478-.125.047-2.773-2.214a1.001 1.001 0 0 0-1.248 0L8.603 21.87l-.125-.047-.702-3.478a1.002 1.002 0 0 0-.956-.802l-3.547-.087-.066-.115 1.698-3.115a.999.999 0 0 0-.217-1.229L2.026 10.65l.023-.132 3.304-1.295a.998.998 0 0 0 .624-1.08l-.531-3.509.103-.085 3.363 1.132c.442.146.929-.028 1.172-.428l1.849-3.029h.134l1.849 3.029c.244.399.731.574 1.172.428l3.363-1.132.103.085-.531 3.509c-.07.462.189.91.624 1.08l3.304 1.295.023.132-2.662 2.347Z" />
    </svg>
  );
});

Bahai.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Bahai.displayName = 'Bahai';

export default Bahai;
