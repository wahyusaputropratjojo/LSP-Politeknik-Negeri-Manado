const SvgTranslate01 = ({ title, titleId, ...props }) => (
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
      d="M12.913 17h7.174m-7.174 0L11 21m1.913-4 2.865-5.991c.231-.483.347-.724.505-.8a.5.5 0 0 1 .434 0c.158.076.274.317.505.8L20.087 17m0 0L22 21M2 5h6m0 0h3.5M8 5V3m3.5 2H14m-2.5 0c-.496 2.957-1.647 5.636-3.334 7.884M10 14a9.396 9.396 0 0 1-1.834-1.116m0 0C6.813 11.848 5.603 10.427 5 9m3.166 3.884A17.295 17.295 0 0 1 2 18"
    />
  </svg>
);
export default SvgTranslate01;
