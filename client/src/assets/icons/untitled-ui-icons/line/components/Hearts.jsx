const SvgHearts = ({ title, titleId, ...props }) => (
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
      d="M15.546 9.925c.373-.664.685-1.263.878-1.72.933-2.216.01-4.764-2.247-5.804-2.257-1.04-4.524.038-5.518 2.12-1.902-1.305-4.44-1.114-5.84.923-1.398 2.037-.96 4.698.957 6.15.87.659 2.59 1.63 4.21 2.494m8.311-2.338c-.422-2.268-2.352-3.927-4.781-3.476-2.43.451-4.001 2.643-3.673 5.025.264 1.914 1.72 6.404 2.283 8.095.077.23.116.346.192.427.066.07.154.12.248.143.107.025.226 0 .465-.048 1.745-.358 6.362-1.342 8.152-2.07 2.227-.907 3.376-3.362 2.515-5.693-.86-2.331-3.226-3.171-5.4-2.403Z"
    />
  </svg>
);
export default SvgHearts;
