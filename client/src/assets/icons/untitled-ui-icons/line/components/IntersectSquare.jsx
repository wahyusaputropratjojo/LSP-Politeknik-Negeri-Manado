const SvgIntersectSquare = ({ title, titleId, ...props }) => (
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
      d="M2 5.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C3.52 2 4.08 2 5.2 2h7.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C16 3.52 16 4.08 16 5.2v7.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C14.48 16 13.92 16 12.8 16H5.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C2 14.48 2 13.92 2 12.8V5.2Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 11.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C9.52 8 10.08 8 11.2 8h7.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C22 9.52 22 10.08 22 11.2v7.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C20.48 22 19.92 22 18.8 22h-7.6c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C8 20.48 8 19.92 8 18.8v-7.6Z"
    />
  </svg>
);
export default SvgIntersectSquare;
