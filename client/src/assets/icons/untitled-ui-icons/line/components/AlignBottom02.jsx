const SvgAlignBottom02 = ({ title, titleId, ...props }) => (
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
      d="M10 18V6c0-.932 0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C8.398 3 7.932 3 7 3c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C4 4.602 4 5.068 4 6v12c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C5.602 21 6.068 21 7 21c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C10 19.398 10 18.932 10 18ZM20 18v-8c0-.932 0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C18.398 7 17.932 7 17 7c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C14 8.602 14 9.068 14 10v8c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C15.602 21 16.068 21 17 21c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C20 19.398 20 18.932 20 18Z"
    />
  </svg>
);
export default SvgAlignBottom02;
