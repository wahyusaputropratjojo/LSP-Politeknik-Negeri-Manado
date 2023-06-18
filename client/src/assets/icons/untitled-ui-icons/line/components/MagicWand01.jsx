const SvgMagicWand01 = ({ title, titleId, ...props }) => (
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
      d="m13 14-3-3m5.01-7.5V2m3.94 3.06L20.01 4m-1.06 9 1.06 1.06m-9-9L9.95 4m10.56 5h1.5M6.131 20.869l9.238-9.238c.396-.396.594-.594.668-.822a1 1 0 0 0 0-.618c-.074-.228-.272-.426-.668-.822l-.737-.738c-.397-.396-.595-.594-.823-.668a1 1 0 0 0-.618 0c-.228.074-.426.272-.822.668L3.13 17.87c-.396.396-.594.594-.668.822a1 1 0 0 0 0 .618c.074.228.272.426.668.822l.738.738c.396.396.594.594.822.668a1 1 0 0 0 .618 0c.228-.074.426-.272.822-.668Z"
    />
  </svg>
);
export default SvgMagicWand01;
