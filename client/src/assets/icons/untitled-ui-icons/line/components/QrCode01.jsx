const SvgQrCode01 = ({ title, titleId, ...props }) => (
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
      d="M7 12h5v5m-8.99-5H3m5.01 5H8m4.01 4H12m9.01-9H21M3 17h1.5m11-5h2M3 21h5m4-19v6m5.6 13h1.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C21 20.24 21 19.96 21 19.4v-1.8c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C20.24 16 19.96 16 19.4 16h-1.8c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C16 16.76 16 17.04 16 17.6v1.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C16.76 21 17.04 21 17.6 21Zm0-13h1.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C21 7.24 21 6.96 21 6.4V4.6c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C20.24 3 19.96 3 19.4 3h-1.8c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C16 3.76 16 4.04 16 4.6v1.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C16.76 8 17.04 8 17.6 8Zm-13 0h1.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C8 7.24 8 6.96 8 6.4V4.6c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C7.24 3 6.96 3 6.4 3H4.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C3 3.76 3 4.04 3 4.6v1.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C3.76 8 4.04 8 4.6 8Z"
    />
  </svg>
);
export default SvgQrCode01;
