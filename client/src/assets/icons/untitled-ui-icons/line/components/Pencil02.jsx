const SvgPencil02 = ({ title, titleId, ...props }) => (
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
      d="m18 2 4 4M2 22l1.276-4.68c.084-.305.125-.458.19-.6.056-.127.126-.247.207-.36.092-.125.204-.237.428-.46L14.434 5.565c.198-.198.297-.297.412-.334a.5.5 0 0 1 .309 0c.114.037.213.136.41.334l2.87 2.868c.197.198.296.297.333.411.033.1.033.21 0 .31-.037.114-.136.213-.334.41L8.101 19.9c-.224.224-.336.336-.462.428a2.003 2.003 0 0 1-.358.208c-.143.064-.296.105-.6.189L2 22Z"
    />
  </svg>
);
export default SvgPencil02;
