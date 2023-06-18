const SvgSnowflake01 = ({ title, titleId, ...props }) => (
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
      d="m18.062 8.5-12.124 7m12.124-7 1.098-4.098M18.062 8.5l4.098 1.098M5.938 15.5 1.84 14.402M5.938 15.5 4.84 19.598M18.062 15.5l-12.124-7m12.124 7 4.098-1.098M18.062 15.5l1.098 4.098M5.938 8.5 4.84 4.402M5.938 8.5 1.84 9.598M12 5v14m0-14L9 2m3 3 3-3m-3 17-3 3m3-3 3 3"
    />
  </svg>
);
export default SvgSnowflake01;
