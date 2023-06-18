const SvgFlag03 = ({ title, titleId, ...props }) => (
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
      d="M4 13h15.587c.462 0 .694 0 .826-.097a.5.5 0 0 0 .202-.357c.015-.163-.104-.361-.342-.758l-2.026-3.376c-.09-.15-.135-.225-.152-.305a.5.5 0 0 1 0-.214c.017-.08.062-.155.152-.305l2.026-3.376c.238-.397.357-.595.342-.758a.5.5 0 0 0-.202-.357C20.28 3 20.049 3 19.587 3H4v18"
    />
  </svg>
);
export default SvgFlag03;
