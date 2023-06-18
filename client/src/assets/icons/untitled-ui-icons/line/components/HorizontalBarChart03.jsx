const SvgHorizontalBarChart03 = ({ title, titleId, ...props }) => (
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
      d="M13 9.5V6.1c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C12.24 4.5 11.96 4.5 11.4 4.5H3m14 10v-3.4c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C16.24 9.5 15.96 9.5 15.4 9.5H3M3 2v20m0-2.5h16.4c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C21 18.74 21 18.46 21 17.9v-1.8c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437c-.214-.109-.494-.109-1.054-.109H3v5Z"
    />
  </svg>
);
export default SvgHorizontalBarChart03;
