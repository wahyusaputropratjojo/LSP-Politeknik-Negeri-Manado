const SvgShoppingBag03 = ({ title, titleId, ...props }) => (
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
      d="M16 8a4 4 0 1 1-8 0m-4.367-.599-.7 8.4c-.15 1.805-.226 2.707.08 3.403a3 3 0 0 0 1.319 1.434C5 21 5.905 21 7.716 21h8.567c1.81 0 2.716 0 3.384-.362a3 3 0 0 0 1.32-1.434c.305-.696.23-1.598.08-3.403l-.7-8.4c-.13-1.552-.195-2.329-.539-2.916a3 3 0 0 0-1.294-1.191C17.92 3 17.141 3 15.583 3H8.416c-1.558 0-2.337 0-2.95.294a3 3 0 0 0-1.295 1.19c-.344.588-.409 1.365-.538 2.917Z"
    />
  </svg>
);
export default SvgShoppingBag03;
