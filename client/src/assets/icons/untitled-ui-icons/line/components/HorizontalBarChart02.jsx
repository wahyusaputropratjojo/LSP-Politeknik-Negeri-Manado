const SvgHorizontalBarChart02 = ({ title, titleId, ...props }) => (
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
      d="M17 9.5v3.4c0 .56 0 .84-.109 1.054a1 1 0 0 1-.437.437c-.214.109-.494.109-1.054.109H3m10 0v3.4c0 .56 0 .84-.109 1.054a1 1 0 0 1-.437.437c-.214.109-.494.109-1.054.109H3M3 2v20M3 9.5h16.4c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C21 8.74 21 8.46 21 7.9V6.1c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C20.24 4.5 19.96 4.5 19.4 4.5H3v5Z"
    />
  </svg>
);
export default SvgHorizontalBarChart02;
