const SvgPerspective02 = ({ title, titleId, ...props }) => (
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
      d="M16 5v14M10 4v16m-7-8h18M3 5.99v12.02c0 1.365 0 2.047.281 2.52a2 2 0 0 0 1.093.877c.523.171 1.189.024 2.52-.272l11.6-2.578c.894-.199 1.341-.298 1.675-.538a2 2 0 0 0 .669-.834c.162-.378.162-.836.162-1.752V8.567c0-.916 0-1.374-.162-1.752a2 2 0 0 0-.669-.833c-.334-.24-.78-.34-1.675-.539l-11.6-2.578c-1.331-.295-1.997-.443-2.52-.271a2 2 0 0 0-1.093.876C3 3.943 3 4.625 3 5.99Z"
    />
  </svg>
);
export default SvgPerspective02;
