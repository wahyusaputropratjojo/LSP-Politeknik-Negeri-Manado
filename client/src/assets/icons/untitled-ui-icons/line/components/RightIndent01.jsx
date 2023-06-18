const SvgRightIndent01 = ({ title, titleId, ...props }) => (
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
      d="M21 4H3m18 16H3m9-10.75H3m9 5.5H3m16.72-6.29-3.867 2.9c-.29.217-.434.326-.486.459a.5.5 0 0 0 0 .362c.052.133.197.242.486.459l3.867 2.9c.412.309.618.463.79.46a.5.5 0 0 0 .384-.192c.106-.136.106-.393.106-.908V9.1c0-.515 0-.772-.106-.908A.5.5 0 0 0 20.51 8c-.172-.003-.378.151-.79.46Z"
    />
  </svg>
);
export default SvgRightIndent01;
