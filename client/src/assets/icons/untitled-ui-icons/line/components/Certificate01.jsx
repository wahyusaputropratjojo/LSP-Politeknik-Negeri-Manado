const SvgCertificate01 = ({ title, titleId, ...props }) => (
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
      d="M6.5 20H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-1.5M12 19a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0 0h.021L8.83 22.193 6 19.364l3.02-3.02M12 19l3.193 3.193 2.828-2.829-3.02-3.02M9 6h6M7 9.5h10"
    />
  </svg>
);
export default SvgCertificate01;
