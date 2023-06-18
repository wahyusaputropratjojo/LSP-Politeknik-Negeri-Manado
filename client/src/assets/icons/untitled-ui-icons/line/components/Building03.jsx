const SvgBuilding03 = ({ title, titleId, ...props }) => (
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
      d="M7.5 7h2.75M7.5 11h2.75M7.5 15h2.75m3.5-8h2.75m-2.75 4h2.75m-2.75 4h2.75m3.5 6V6.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C18.48 3 17.92 3 16.8 3H7.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C4 4.52 4 5.08 4 6.2V21m18 0H2"
    />
  </svg>
);
export default SvgBuilding03;
