const SvgBuilding08 = ({ title, titleId, ...props }) => (
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
      d="M3 21h18M6 18v-8m4 8v-8m4 8v-8m4 8v-8m2-3-7.576-4.735c-.154-.096-.23-.144-.313-.163a.5.5 0 0 0-.222 0c-.082.019-.16.067-.313.163L4 7h16Z"
    />
  </svg>
);
export default SvgBuilding08;
