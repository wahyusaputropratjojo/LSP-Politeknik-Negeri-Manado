const SvgAlarmClockOff = ({ title, titleId, ...props }) => (
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
      d="M10.5 5.142a7.999 7.999 0 0 1 9.358 9.358m-1.722 3.634A8 8 0 1 1 6.862 6.869M4 4 2 6m20 0-3-3M6 19l-2 2m17 0L3 3"
    />
  </svg>
);
export default SvgAlarmClockOff;
