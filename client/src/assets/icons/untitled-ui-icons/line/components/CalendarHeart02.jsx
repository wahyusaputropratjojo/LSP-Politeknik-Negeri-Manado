const SvgCalendarHeart02 = ({ title, titleId, ...props }) => (
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
      d="M21 10H3m18 1.5V8.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 4 17.88 4 16.2 4H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 6.28 3 7.12 3 8.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 22 6.12 22 7.8 22h4.7M16 2v4M8 2v4m9.498 9.712c-.7-.78-1.867-.989-2.744-.275-.877.713-1 1.906-.311 2.75.688.844 3.055 2.813 3.055 2.813s2.366-1.97 3.055-2.813c.688-.844.58-2.044-.312-2.75-.892-.706-2.044-.504-2.743.275Z"
    />
  </svg>
);
export default SvgCalendarHeart02;
