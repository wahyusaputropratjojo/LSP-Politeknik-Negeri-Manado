const SvgTablet01 = ({ title, titleId, ...props }) => (
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
      d="M12 17.5h.01M7.2 22h9.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C20 20.48 20 19.92 20 18.8V5.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C18.48 2 17.92 2 16.8 2H7.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C4 3.52 4 4.08 4 5.2v13.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C5.52 22 6.08 22 7.2 22Zm5.3-4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
    />
  </svg>
);
export default SvgTablet01;
