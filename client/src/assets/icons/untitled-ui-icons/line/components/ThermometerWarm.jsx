const SvgThermometerWarm = ({ title, titleId, ...props }) => (
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
      d="M12 9a4 4 0 0 0-2 7.5M12 3v2M6.6 18.4l-1.4 1.4M4 13H2m4.6-5.4L5.2 6.2M20 14.535V4a2 2 0 1 0-4 0v10.535a4 4 0 1 0 4 0Z"
    />
  </svg>
);
export default SvgThermometerWarm;
