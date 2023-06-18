const SvgNavigationPointerOff02 = ({ title, titleId, ...props }) => (
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
      d="m10.471 5.476.792-1.806c.232-.528.348-.792.51-.872a.5.5 0 0 1 .446 0c.162.08.278.344.51.872l3.172 7.233M8.947 8.952l-4.965 11.32c-.257.585-.385.878-.329 1.057a.5.5 0 0 0 .327.326c.18.056.472-.072 1.056-.33l6.637-2.92c.12-.052.178-.078.24-.088.055-.01.11-.01.165 0 .062.01.121.036.24.088l6.637 2.92c.584.258.877.386 1.056.33a.5.5 0 0 0 .327-.326c.056-.18-.072-.472-.328-1.057l-.205-.465M22 22 2 2"
    />
  </svg>
);
export default SvgNavigationPointerOff02;
