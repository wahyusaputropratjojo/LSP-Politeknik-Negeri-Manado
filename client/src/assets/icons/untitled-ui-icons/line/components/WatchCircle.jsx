const SvgWatchCircle = ({ title, titleId, ...props }) => (
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
      d="m7 17 .486 2.428c.183.916.274 1.374.514 1.717a2 2 0 0 0 .839.688c.383.167.85.167 1.784.167h2.754c.934 0 1.401 0 1.784-.167a2 2 0 0 0 .84-.688c.239-.343.33-.801.514-1.717L17 17M7 7l.486-2.428c.183-.916.274-1.374.514-1.717a2 2 0 0 1 .839-.688C9.222 2 9.689 2 10.623 2h2.754c.934 0 1.401 0 1.784.167a2 2 0 0 1 .84.688c.239.343.33.801.514 1.717L17 7m-5 2v3l1.5 1.5M19 12a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
    />
  </svg>
);
export default SvgWatchCircle;
