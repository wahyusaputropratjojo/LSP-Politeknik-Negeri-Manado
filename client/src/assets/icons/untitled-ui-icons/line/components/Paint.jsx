const SvgPaint = ({ title, titleId, ...props }) => (
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
      d="M3 13h17m-8-9.5L10.5 2m1 1 8.868 8.869c.396.396.594.594.668.822a1 1 0 0 1 0 .618c-.074.228-.272.426-.668.822l-5.474 5.475c-1.188 1.188-1.782 1.782-2.467 2.004a3 3 0 0 1-1.854 0c-.685-.222-1.28-.816-2.468-2.004l-3.211-3.212c-1.188-1.188-1.782-1.782-2.005-2.467a3 3 0 0 1 0-1.854c.223-.685.817-1.28 2.005-2.467L11.499 3Z"
    />
  </svg>
);
export default SvgPaint;
