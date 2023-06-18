const SvgAttachment01 = ({ title, titleId, ...props }) => (
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
      d="m21.152 10.9-9.015 9.016a5.25 5.25 0 0 1-7.425-7.425l9.016-9.016a3.5 3.5 0 1 1 4.95 4.95l-8.662 8.662a1.75 1.75 0 0 1-2.475-2.475l7.601-7.601"
    />
  </svg>
);
export default SvgAttachment01;
