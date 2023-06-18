const SvgHeartSquare = ({ title, titleId, ...props }) => (
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
      d="M3 7.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.28 3 6.12 3 7.8 3h8.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C21 5.28 21 6.12 21 7.8v8.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2V7.8Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.997 9.068c-1-1.169-2.667-1.483-3.92-.413-1.252 1.07-1.429 2.86-.445 4.125.63.81 2.244 2.314 3.322 3.29.359.325.538.487.753.552.184.056.395.056.58 0 .214-.065.393-.227.752-.552 1.079-.976 2.692-2.48 3.322-3.29.984-1.265.829-3.066-.445-4.125-1.274-1.059-2.92-.756-3.92.413Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgHeartSquare;
