const SvgMoon02 = ({ title, titleId, ...props }) => (
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
      d="M21.955 12.956a8 8 0 1 1-10.91-10.911C5.97 2.526 2 6.799 2 12c0 5.523 4.477 10 10 10 5.2 0 9.473-3.97 9.955-9.044Z"
    />
  </svg>
);
export default SvgMoon02;
