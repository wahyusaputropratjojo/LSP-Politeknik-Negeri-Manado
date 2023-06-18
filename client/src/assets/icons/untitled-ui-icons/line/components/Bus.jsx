const SvgBus = ({ title, titleId, ...props }) => (
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
      d="M8.5 19v2.2c0 .28 0 .42-.055.527a.5.5 0 0 1-.218.218C8.12 22 7.98 22 7.7 22H5.8c-.28 0-.42 0-.527-.055a.5.5 0 0 1-.218-.218C5 21.62 5 21.48 5 21.2V19m14 0v2.2c0 .28 0 .42-.055.527a.5.5 0 0 1-.218.218C18.62 22 18.48 22 18.2 22h-1.9c-.28 0-.42 0-.527-.055a.5.5 0 0 1-.218-.218c-.055-.107-.055-.247-.055-.527V19M3 12h18M3 5.5h18m-14.5 10H8m8 0h1.5M7.8 19h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 16.72 21 15.88 21 14.2V6.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 2 17.88 2 16.2 2H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 4.28 3 5.12 3 6.8v7.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 19 6.12 19 7.8 19Z"
    />
  </svg>
);
export default SvgBus;
