const SvgCertificate02 = ({ title, titleId, ...props }) => (
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
      d="M9 18.5h6M7 15h10M5 2h14c1.105 0 2 .995 2 2.222v15.556C21 21.005 20.105 22 19 22H5c-1.105 0-2-.995-2-2.222V4.222C3 2.995 3.895 2 5 2Zm6.998 4.212c-.7-.78-1.867-.989-2.744-.275-.877.713-1 1.906-.312 2.75.689.844 3.056 2.813 3.056 2.813s2.366-1.97 3.055-2.813c.688-.844.58-2.044-.312-2.75-.892-.706-2.044-.504-2.743.275Z"
    />
  </svg>
);
export default SvgCertificate02;
