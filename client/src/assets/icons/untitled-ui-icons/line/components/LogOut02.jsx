const SvgLogOut02 = ({ title, titleId, ...props }) => (
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
      d="m16 17 5-5m0 0-5-5m5 5H9m3 5c0 .93 0 1.395-.102 1.776a3 3 0 0 1-2.122 2.122C9.395 21 8.93 21 8 21h-.5c-1.398 0-2.097 0-2.648-.228a3 3 0 0 1-1.624-1.624C3 18.597 3 17.898 3 16.5v-9c0-1.398 0-2.097.228-2.648a3 3 0 0 1 1.624-1.624C5.403 3 6.102 3 7.5 3H8c.93 0 1.395 0 1.776.102a3 3 0 0 1 2.122 2.122C12 5.605 12 6.07 12 7"
    />
  </svg>
);
export default SvgLogOut02;
