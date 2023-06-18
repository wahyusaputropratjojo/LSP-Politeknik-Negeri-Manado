const SvgGlobe06 = ({ title, titleId, ...props }) => (
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
      d="m2.687 15.645 1.908-1.101a.5.5 0 0 1 .342-.059l3.754.703a.5.5 0 0 0 .592-.494l-.014-3.29a.5.5 0 0 1 .068-.254l1.895-3.244a.5.5 0 0 0-.023-.54l-3.19-4.54M19 4.859C13.5 7.5 16.5 11 17.5 11.5c1.877.938 4.488 1 4.488 1 .008-.166.012-.332.012-.5 0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10c.168 0 .334-.004.5-.012m4.258-.048L13.59 13.59l8.349 3.167-3.702 1.48-1.48 3.702Z"
    />
  </svg>
);
export default SvgGlobe06;
