const SvgCoinsStacked04 = ({ title, titleId, ...props }) => (
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
      d="M20 5c0 1.657-3.582 3-8 3S4 6.657 4 5m16 0c0-1.657-3.582-3-8-3S4 3.343 4 5m16 0v14c0 1.657-3.582 3-8 3s-8-1.343-8-3V5m16 4.667c0 1.656-3.582 3-8 3s-8-1.344-8-3m16 4.663c0 1.657-3.582 3-8 3s-8-1.343-8-3"
    />
  </svg>
);
export default SvgCoinsStacked04;
