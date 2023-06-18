const SvgScale03 = ({ title, titleId, ...props }) => (
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
      d="M16.2 3H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.28 3 6.12 3 7.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 21 6.12 21 7.8 21h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 18.72 21 17.88 21 16.2V7.8M16.2 3c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C21 5.28 21 6.12 21 7.8M16.2 3h-1c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C12 4.52 12 5.08 12 6.2v2.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C13.52 12 14.08 12 15.2 12h2.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C21 10.48 21 9.92 21 8.8v-1m-8.5 3.7L7 17m0 0h5m-5 0v-5"
    />
  </svg>
);
export default SvgScale03;
