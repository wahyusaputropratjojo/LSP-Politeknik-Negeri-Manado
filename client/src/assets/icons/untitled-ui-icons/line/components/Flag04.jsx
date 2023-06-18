const SvgFlag04 = ({ title, titleId, ...props }) => (
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
      d="M13.5 6.5h6.206c.428 0 .643 0 .772.09a.5.5 0 0 1 .208.337c.023.156-.073.347-.265.73l-1.252 2.505a1.086 1.086 0 0 0-.106.252.502.502 0 0 0-.004.175c.01.066.038.13.094.256l1.347 3.03c.167.375.25.562.223.714a.5.5 0 0 1-.211.325c-.128.086-.333.086-.743.086H12.1c-.56 0-.84 0-1.054-.109a1 1 0 0 1-.437-.437c-.109-.214-.109-.494-.109-1.054V11M3 21V3.5M3 11h8.9c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437c.109-.214.109-.494.109-1.054V4.1c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C12.74 2.5 12.46 2.5 11.9 2.5H4.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C3 3.26 3 3.54 3 4.1V11Z"
    />
  </svg>
);
export default SvgFlag04;
