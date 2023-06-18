const SvgAirpods = ({ title, titleId, ...props }) => (
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
      d="M2 7.625a4.125 4.125 0 0 0 4.125 4.125c.306 0 .459 0 .538.027a.445.445 0 0 1 .31.31c.027.08.027.203.027.452v6.336a1.625 1.625 0 1 0 3.25 0V7.625a4.125 4.125 0 0 0-8.25 0ZM22 7.625a4.125 4.125 0 0 1-4.125 4.125c-.306 0-.459 0-.538.027a.445.445 0 0 0-.31.31c-.027.08-.027.203-.027.452v6.336a1.625 1.625 0 1 1-3.25 0V7.625a4.125 4.125 0 1 1 8.25 0Z"
    />
  </svg>
);
export default SvgAirpods;
