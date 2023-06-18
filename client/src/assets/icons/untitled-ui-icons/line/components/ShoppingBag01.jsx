const SvgShoppingBag01 = ({ title, titleId, ...props }) => (
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
      d="M5.52 2.64 3.96 4.72c-.309.412-.463.618-.46.79a.5.5 0 0 0 .192.384C3.828 6 4.085 6 4.6 6h14.8c.515 0 .773 0 .908-.106a.5.5 0 0 0 .192-.384c.003-.172-.151-.378-.46-.79l-1.56-2.08m-12.96 0c.176-.235.264-.352.376-.437a1 1 0 0 1 .33-.165C6.36 2 6.505 2 6.8 2h10.4c.293 0 .44 0 .575.038a1 1 0 0 1 .33.165c.111.085.199.202.375.437m-12.96 0L3.64 5.147c-.237.316-.356.475-.44.649a2 2 0 0 0-.163.487C3 6.473 3 6.671 3 7.067V18.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C4.52 22 5.08 22 6.2 22h11.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C21 20.48 21 19.92 21 18.8V7.067c0-.396 0-.594-.037-.784a1.998 1.998 0 0 0-.163-.487c-.084-.174-.203-.333-.44-.65L18.48 2.64M16 10a4 4 0 1 1-8 0"
    />
  </svg>
);
export default SvgShoppingBag01;
