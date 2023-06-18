const SvgServer04 = ({ title, titleId, ...props }) => (
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
      d="m22 10.5-.474-3.795c-.186-1.489-.28-2.233-.63-2.794a3 3 0 0 0-1.283-1.133c-.6-.278-1.35-.278-2.85-.278H7.237c-1.5 0-2.25 0-2.85.278a3 3 0 0 0-1.283 1.133c-.35.56-.444 1.305-.63 2.794L2 10.5m3.5 4h13m-13 0a3.5 3.5 0 1 1 0-7h13a3.5 3.5 0 1 1 0 7m-13 0a3.5 3.5 0 1 0 0 7h13a3.5 3.5 0 1 0 0-7M6 11h.01M6 18h.01M12 11h6m-6 7h6"
    />
  </svg>
);
export default SvgServer04;
