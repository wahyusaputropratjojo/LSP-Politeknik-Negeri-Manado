const SvgBankNote03 = ({ title, titleId, ...props }) => (
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
      d="M14 9h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3H10m2-7v1m0 6v1m6-4h.01M6 12h.01M2 8.2v7.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C3.52 19 4.08 19 5.2 19h13.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C22 17.48 22 16.92 22 15.8V8.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C20.48 5 19.92 5 18.8 5H5.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C2 6.52 2 7.08 2 8.2ZM18.5 12a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm-12 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
    />
  </svg>
);
export default SvgBankNote03;
