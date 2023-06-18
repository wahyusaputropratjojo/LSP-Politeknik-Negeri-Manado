const SvgLogIn03 = ({ title, titleId, ...props }) => (
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
      d="M6 17c0 .351 0 .527.016.68a3 3 0 0 0 2.286 2.611c.15.036.324.059.672.105l6.592.88c1.876.25 2.814.375 3.542.085a3 3 0 0 0 1.509-1.32c.383-.684.383-1.63.383-3.524V7.482c0-1.893 0-2.84-.383-3.523a3 3 0 0 0-1.509-1.32c-.728-.29-1.666-.165-3.542.085l-6.592.88c-.349.046-.523.069-.672.105A3 3 0 0 0 6.016 6.32C6 6.473 6 6.65 6 7m6 1 4 4m0 0-4 4m4-4H3"
    />
  </svg>
);
export default SvgLogIn03;
