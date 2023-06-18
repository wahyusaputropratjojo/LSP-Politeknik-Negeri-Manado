const SvgAlignHorizontalCentre02 = ({ title, titleId, ...props }) => (
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
      d="M16 10c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C19 8.398 19 7.932 19 7c0-.932 0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C17.398 4 16.932 4 16 4H8c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C5 5.602 5 6.068 5 7c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C6.602 10 7.068 10 8 10h8ZM18 20c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C21 18.398 21 17.932 21 17c0-.932 0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C19.398 14 18.932 14 18 14H6c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C3 15.602 3 16.068 3 17c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C4.602 20 5.068 20 6 20h12Z"
    />
  </svg>
);
export default SvgAlignHorizontalCentre02;
