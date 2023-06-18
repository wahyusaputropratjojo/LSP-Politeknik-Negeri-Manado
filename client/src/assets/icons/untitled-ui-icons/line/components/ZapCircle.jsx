const SvgZapCircle = ({ title, titleId, ...props }) => (
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
      d="m12 5.5-4.638 6.747c-.28.406-.42.609-.41.778a.5.5 0 0 0 .195.373c.135.102.38.102.874.102H12v5l4.638-6.747c.28-.406.42-.609.41-.778a.5.5 0 0 0-.195-.373c-.135-.102-.38-.102-.874-.102H12v-5Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
    />
  </svg>
);
export default SvgZapCircle;
