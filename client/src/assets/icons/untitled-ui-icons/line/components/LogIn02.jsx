const SvgLogIn02 = ({ title, titleId, ...props }) => (
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
      d="M6 17c0 .93 0 1.395.102 1.776a3 3 0 0 0 2.122 2.122C8.605 21 9.07 21 10 21h6.2c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 18.72 21 17.88 21 16.2V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 3 17.88 3 16.2 3H10c-.93 0-1.395 0-1.776.102a3 3 0 0 0-2.122 2.122C6 5.605 6 6.07 6 7m6 1 4 4m0 0-4 4m4-4H3"
    />
  </svg>
);
export default SvgLogIn02;
