const SvgPerspective01 = ({ title, titleId, ...props }) => (
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
      d="M19 9v6M5 7v10M17 6.714 7 5.286m10 12L7 18.714M4.6 7h.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C7 6.24 7 5.96 7 5.4v-.8c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C6.24 3 5.96 3 5.4 3h-.8c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C3 3.76 3 4.04 3 4.6v.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C3.76 7 4.04 7 4.6 7Zm0 14h.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C7 20.24 7 19.96 7 19.4v-.8c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C6.24 17 5.96 17 5.4 17h-.8c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C3 17.76 3 18.04 3 18.6v.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C3.76 21 4.04 21 4.6 21Zm14-12h.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C21 8.24 21 7.96 21 7.4v-.8c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C20.24 5 19.96 5 19.4 5h-.8c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C17 5.76 17 6.04 17 6.6v.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C17.76 9 18.04 9 18.6 9Zm0 10h.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C21 18.24 21 17.96 21 17.4v-.8c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C20.24 15 19.96 15 19.4 15h-.8c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C17 15.76 17 16.04 17 16.6v.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C17.76 19 18.04 19 18.6 19Z"
    />
  </svg>
);
export default SvgPerspective01;
