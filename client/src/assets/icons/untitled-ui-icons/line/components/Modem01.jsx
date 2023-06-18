const SvgModem01 = ({ title, titleId, ...props }) => (
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
      d="M16.243 4.757a6 6 0 0 1 0 8.485m-8.486 0a6 6 0 0 1 0-8.485M4.858 16c-3.834-3.91-3.81-10.19.07-14.071m14.143 0c3.882 3.881 3.905 10.16.07 14.07M12 16V9M5 22h14c.932 0 1.398 0 1.765-.151a2 2 0 0 0 1.083-1.083C22 20.398 22 19.932 22 19c0-.932 0-1.398-.152-1.766a2 2 0 0 0-1.083-1.082C20.398 16 19.932 16 19 16H5c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.082C2 17.602 2 18.068 2 19s0 1.398.152 1.765a2 2 0 0 0 1.083 1.082C3.602 22 4.068 22 5 22Z"
    />
  </svg>
);
export default SvgModem01;
