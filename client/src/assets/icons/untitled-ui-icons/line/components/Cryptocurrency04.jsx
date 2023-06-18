const SvgCryptocurrency04 = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m2 2 2 2m18-2-2 2m2 18-2-2M2 22l2-2m-2-4h1.5M8 2v1.5M22 8h-1.5M16 22v-1.5m2-4.5h3.5M16 2v4M2 8h4m2 14v-4m3.434-10.434-3.868 3.868c-.198.198-.297.297-.334.412a.5.5 0 0 0 0 .309c.037.114.136.213.334.41l3.868 3.87c.198.197.297.296.412.333.1.033.208.033.309 0 .114-.037.213-.136.41-.334l3.87-3.868c.197-.198.296-.297.333-.412a.499.499 0 0 0 0-.309c-.037-.114-.136-.213-.334-.41l-3.868-3.87c-.198-.197-.297-.296-.412-.333a.5.5 0 0 0-.309 0c-.114.037-.213.136-.41.334Z"
    />
  </svg>
);
export default SvgCryptocurrency04;
