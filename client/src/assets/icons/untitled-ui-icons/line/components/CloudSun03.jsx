const SvgCloudSun03 = ({ title, titleId, ...props }) => (
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
      d="M3.15 11a7.5 7.5 0 1 1 14.784-2.5M6 22a4 4 0 1 1 .337-7.986 6.003 6.003 0 0 1 10.866-1.004A4.5 4.5 0 1 1 17.5 22H6Z"
    />
  </svg>
);
export default SvgCloudSun03;
