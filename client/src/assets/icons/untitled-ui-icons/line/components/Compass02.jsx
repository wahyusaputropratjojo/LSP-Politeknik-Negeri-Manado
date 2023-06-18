const SvgCompass02 = ({ title, titleId, ...props }) => (
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
      d="M22 12h-2m2 0c0 5.523-4.477 10-10 10m10-10c0-5.523-4.477-10-10-10m7.071 17.071-1.414-1.414M4 12H2m0 0c0 5.523 4.477 10 10 10M2 12C2 6.477 6.477 2 12 2M6.343 6.343 4.93 4.93M12 4V2m5.657 4.343L19.07 4.93M12 22v-2m-7.071-.929 1.414-1.414M12 8l4 4-4 4-4-4 4-4Z"
    />
  </svg>
);
export default SvgCompass02;
