const SvgCursor04 = ({ title, titleId, ...props }) => (
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
      d="M4.407 3.414c-.458-.135-.687-.202-.843-.144a.5.5 0 0 0-.294.294c-.058.156.009.385.144.843l4.206 14.3c.125.426.188.64.314.738a.5.5 0 0 0 .39.1c.158-.027.315-.184.629-.498L12 16l4.434 4.434c.198.198.297.297.411.335a.5.5 0 0 0 .31 0c.114-.037.213-.136.41-.334l2.87-2.87c.197-.197.296-.296.333-.41a.5.5 0 0 0 0-.31c-.037-.113-.136-.212-.334-.41L16 12l3.047-3.047c.314-.314.47-.47.497-.629a.5.5 0 0 0-.1-.39c-.098-.126-.311-.189-.737-.314l-14.3-4.206Z"
    />
  </svg>
);
export default SvgCursor04;
