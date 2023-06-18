const SvgWifiOff = ({ title, titleId, ...props }) => (
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
      d="M15.312 10c1.368.426 2.65 1.12 3.768 2.05m3.5-3.55a16 16 0 0 0-12.383-3.896M8.53 15.61a6 6 0 0 1 6.95 0M12 19.5h.01M1.193 8.7A16.014 16.014 0 0 1 5.76 5.764m-1.027 6.48a10.966 10.966 0 0 1 5-2.51m5.966 6.042A5.974 5.974 0 0 0 12 14.5c-1.416 0-2.718.49-3.745 1.312M3 3l18 18"
    />
  </svg>
);
export default SvgWifiOff;
