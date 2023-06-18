const SvgDownload04 = ({ title, titleId, ...props }) => (
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
      d="m8 12 4 4m0 0 4-4m-4 4V6.8c0-1.39 0-2.086-.55-2.865-.366-.517-1.42-1.155-2.047-1.24-.945-.129-1.304.059-2.022.433A9.999 9.999 0 0 0 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10a9.996 9.996 0 0 0-5-8.662"
    />
  </svg>
);
export default SvgDownload04;
