const SvgFastForward = ({ title, titleId, ...props }) => (
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
      d="M13 16.437c0 1.13 0 1.695.228 1.972a1 1 0 0 0 .81.363c.358-.013.78-.389 1.625-1.14l4.992-4.436c.465-.414.698-.62.783-.865a1 1 0 0 0 0-.663c-.085-.244-.318-.45-.783-.864l-4.992-4.437c-.845-.75-1.267-1.126-1.626-1.14a1 1 0 0 0-.809.364C13 5.868 13 6.433 13 7.563v8.874ZM2 16.437c0 1.13 0 1.695.228 1.972a1 1 0 0 0 .81.363c.358-.013.78-.389 1.625-1.14l4.992-4.436c.465-.414.698-.62.783-.865a1 1 0 0 0 0-.663c-.085-.244-.318-.45-.783-.864L4.663 6.367c-.845-.75-1.267-1.126-1.626-1.14a1 1 0 0 0-.809.364C2 5.868 2 6.433 2 7.563v8.874Z"
    />
  </svg>
);
export default SvgFastForward;
