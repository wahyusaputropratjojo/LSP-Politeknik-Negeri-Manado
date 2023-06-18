const SvgImage03 = ({ title, titleId, ...props }) => (
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
      d="m4.272 20.728 6.597-6.597c.396-.396.594-.594.822-.668a1 1 0 0 1 .618 0c.228.074.426.272.822.668l6.553 6.553M14 15l2.869-2.869c.396-.396.594-.594.822-.668a1 1 0 0 1 .618 0c.228.074.426.272.822.668L22 15M10 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM6.8 21h10.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C22 18.72 22 17.88 22 16.2V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C19.72 3 18.88 3 17.2 3H6.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C2 5.28 2 6.12 2 7.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C4.28 21 5.12 21 6.8 21Z"
    />
  </svg>
);
export default SvgImage03;
