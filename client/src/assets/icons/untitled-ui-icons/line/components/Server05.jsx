const SvgServer05 = ({ title, titleId, ...props }) => (
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
      d="M19 9a7 7 0 0 1-7 7m7-7a7 7 0 0 0-7-7m7 7H5m7 7a7 7 0 0 1-7-7m7 7a10.71 10.71 0 0 0 2.8-7A10.711 10.711 0 0 0 12 2m0 14a10.709 10.709 0 0 1-2.8-7A10.709 10.709 0 0 1 12 2m0 14v2M5 9a7 7 0 0 1 7-7m2 18a2 2 0 1 1-4 0m4 0a2 2 0 0 0-2-2m2 2h7m-11 0a2 2 0 0 1 2-2m-2 2H3"
    />
  </svg>
);
export default SvgServer05;
