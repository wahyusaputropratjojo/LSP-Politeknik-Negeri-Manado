const SvgGift02 = ({ title, titleId, ...props }) => (
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
      d="M12 7H7.5a2.5 2.5 0 1 1 0-5C11 2 12 7 12 7Zm0 0h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7Zm0 0v15M2 14h20M2 10.2v8.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C3.52 22 4.08 22 5.2 22h13.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C22 20.48 22 19.92 22 18.8v-8.6c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C20.48 7 19.92 7 18.8 7H5.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C2 8.52 2 9.08 2 10.2Z"
    />
  </svg>
);
export default SvgGift02;
