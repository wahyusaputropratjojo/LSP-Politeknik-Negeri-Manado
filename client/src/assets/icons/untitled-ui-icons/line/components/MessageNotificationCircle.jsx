const SvgMessageNotificationCircle = ({ title, titleId, ...props }) => (
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
      d="M11.707 3.036a8.5 8.5 0 0 0-7.264 11.18c.108.322.162.482.172.605a.899.899 0 0 1-.028.326c-.03.12-.098.245-.232.494l-1.636 3.027c-.233.432-.35.648-.324.815a.5.5 0 0 0 .234.35c.144.087.388.062.876.011l5.121-.529c.155-.016.233-.024.303-.021.07.002.12.009.187.024.069.016.155.05.329.116a8.5 8.5 0 0 0 11.52-7.153M20.12 3.88a3 3 0 1 1-4.243 4.242 3 3 0 0 1 4.243-4.242Z"
    />
  </svg>
);
export default SvgMessageNotificationCircle;
