const SvgGridDotsTop = ({ title, titleId, ...props }) => (
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
      d="M3 21h.01M3 12h.01M3 16.5h.01M3 7.5h.01M7.5 21h.01m-.01-9h.01m8.99 9h.01m-.01-9h.01M12 21h.01M12 12h.01M12 16.5h.01m-.01-9h.01M21 21h.01M21 12h.01M21 16.5h.01m-.01-9h.01M21 3H3"
    />
  </svg>
);
export default SvgGridDotsTop;
