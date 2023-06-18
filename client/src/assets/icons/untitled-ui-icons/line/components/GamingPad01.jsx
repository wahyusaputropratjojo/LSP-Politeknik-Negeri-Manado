const SvgGamingPad01 = ({ title, titleId, ...props }) => (
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
      d="M6 11h4M8 9v4m7-1h.01M18 10h.01m-7.561-5h3.102c2.625 0 3.937 0 4.967.497a5 5 0 0 1 2.162 2.014c.57.992.664 2.3.85 4.919l.247 3.444a2.918 2.918 0 0 1-5.152 2.076l-.375-.45c-.343-.412-.515-.618-.71-.784a3 3 0 0 0-1.436-.672C13.851 16 13.584 16 13.047 16h-2.095c-.536 0-.804 0-1.056.044a3 3 0 0 0-1.436.672c-.195.166-.367.372-.71.784l-.375.45a2.918 2.918 0 0 1-5.152-2.075l.246-3.445c.187-2.618.28-3.927.85-4.92a5 5 0 0 1 2.162-2.013C6.511 5 7.824 5 10.45 5Z"
    />
  </svg>
);
export default SvgGamingPad01;
