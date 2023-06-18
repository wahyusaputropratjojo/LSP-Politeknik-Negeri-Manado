const SvgCursor03 = ({ title, titleId, ...props }) => (
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
      d="M4.712 3.674c-.541-.213-.811-.32-.984-.262a.5.5 0 0 0-.316.316c-.057.173.049.443.262.984l5.3 13.455c.172.435.258.653.398.74a.5.5 0 0 0 .408.055c.158-.047.298-.234.579-.608l2.14-2.854 3.45 4.742c.19.261.284.392.405.446a.5.5 0 0 0 .338.027c.128-.035.242-.15.47-.377l3.176-3.176c.227-.228.341-.342.377-.47a.5.5 0 0 0-.027-.338c-.054-.12-.185-.215-.446-.405l-4.742-3.45 2.854-2.14c.374-.28.561-.421.608-.58a.5.5 0 0 0-.055-.407c-.087-.14-.305-.226-.74-.397L4.712 3.674Z"
    />
  </svg>
);
export default SvgCursor03;
