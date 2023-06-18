const SvgDataflow04 = ({ title, titleId, ...props }) => (
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
      d="M4 18v-.2c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C6.28 13 7.12 13 8.8 13h6.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C20 15.28 20 16.12 20 17.8v.2M4 18a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm16 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V8M6 8h12c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C21 6.398 21 5.932 21 5c0-.932 0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C19.398 2 18.932 2 18 2H6c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C3 3.602 3 4.068 3 5c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C4.602 8 5.068 8 6 8Z"
    />
  </svg>
);
export default SvgDataflow04;
