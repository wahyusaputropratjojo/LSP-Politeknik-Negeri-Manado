const SvgBrush01 = ({ title, titleId, ...props }) => (
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
      d="M9 11.222 12.778 15m-4.803 5.975C6.608 22.342 4 22 2 22c1.025-2-.342-4.608 1.025-5.975a3.5 3.5 0 0 1 4.95 4.95Zm3.947-5.05 9.137-9.868a2.204 2.204 0 0 0-3.116-3.116L8.075 12.08c-.51.472-.765.708-.913.96a2 2 0 0 0-.038 1.967c.139.257.385.503.876.994.491.492.737.737.994.876a2 2 0 0 0 1.968-.038c.251-.148.487-.403.96-.913Z"
    />
  </svg>
);
export default SvgBrush01;
