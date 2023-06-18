const SvgBluetoothSignal = ({ title, titleId, ...props }) => (
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
      d="m2 7 12 10-6 5V2l6 5L2 17M20.145 6.5a9.386 9.386 0 0 1 1.769 5.5 9.386 9.386 0 0 1-1.77 5.5M17 8.857c.621.891.986 1.975.986 3.143A5.475 5.475 0 0 1 17 15.143"
    />
  </svg>
);
export default SvgBluetoothSignal;
