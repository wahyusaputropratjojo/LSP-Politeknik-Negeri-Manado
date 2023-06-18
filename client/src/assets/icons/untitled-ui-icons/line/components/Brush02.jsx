const SvgBrush02 = ({ title, titleId, ...props }) => (
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
      d="M18 10V3.6c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C17.24 2 16.96 2 16.4 2H7.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C6 2.76 6 3.04 6 3.6V10m12 0H6m12 0v.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C15.72 15 14.88 15 13.2 15h-2.4c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C6 12.72 6 11.88 6 10.2V10m8.5 5v4.5a2.5 2.5 0 0 1-5 0V15"
    />
  </svg>
);
export default SvgBrush02;
