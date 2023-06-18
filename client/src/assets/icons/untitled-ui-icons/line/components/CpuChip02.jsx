const SvgCpuChip02 = ({ title, titleId, ...props }) => (
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
      d="M9 2v3m6-3v3M9 19v3m6-3v3m4-13h3m-3 5h3M2 9h3m-3 5h3m4.8 5h4.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C19 16.72 19 15.88 19 14.2V9.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C16.72 5 15.88 5 14.2 5H9.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C5 7.28 5 8.12 5 9.8v4.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C7.28 19 8.12 19 9.8 19Z"
    />
  </svg>
);
export default SvgCpuChip02;
