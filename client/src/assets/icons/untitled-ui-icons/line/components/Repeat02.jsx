const SvgRepeat02 = ({ title, titleId, ...props }) => (
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
      d="m11 2 3 3m0 0-3 3m3-3H6.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C2 7.28 2 8.12 2 9.8v5.7c0 .464 0 .697.026.892a3 3 0 0 0 2.582 2.582c.195.026.428.026.892.026m4.5 0h7.2c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C22 16.72 22 15.88 22 14.2V8.5c0-.464 0-.697-.026-.892a3 3 0 0 0-2.582-2.582C19.197 5 18.964 5 18.5 5M10 19l3 3m-3-3 3-3"
    />
  </svg>
);
export default SvgRepeat02;
