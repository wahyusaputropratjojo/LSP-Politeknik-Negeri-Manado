const SvgDataflow01 = ({ title, titleId, ...props }) => (
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
      d="M17 20h-.2c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C12 17.72 12 16.88 12 15.2V8.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C14.28 4 15.12 4 16.8 4h.2m0 16a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm0-16a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM7 12h10M7 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm10 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z"
    />
  </svg>
);
export default SvgDataflow01;
