const SvgFilm02 = ({ title, titleId, ...props }) => (
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
      d="M12 22V2M7 22v-5M7 7V2m10 20v-5m0-10V2M2 7h20M2 17h20m0 .2V6.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C19.72 2 18.88 2 17.2 2H6.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C2 4.28 2 5.12 2 6.8v10.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C4.28 22 5.12 22 6.8 22h10.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C22 19.72 22 18.88 22 17.2Z"
    />
  </svg>
);
export default SvgFilm02;
