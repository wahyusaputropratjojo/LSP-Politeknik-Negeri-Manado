const SvgCameraPlus = ({ title, titleId, ...props }) => (
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
      d="M22 11.5v3.1c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748C18.96 21 17.84 21 15.6 21H8.4c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748C2 17.96 2 16.84 2 14.6V9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C5.04 3 6.16 3 8.4 3h4.1M19 8V2m-3 3h6m-6 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
    />
  </svg>
);
export default SvgCameraPlus;
