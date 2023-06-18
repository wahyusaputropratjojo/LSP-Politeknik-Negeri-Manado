const SvgPieChart01 = ({ title, titleId, ...props }) => (
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
      d="M21.21 15.89A10 10 0 1 1 8 2.83m13.24 5.343a10 10 0 0 1 .728 3.028c.021.257.031.385-.02.5a.525.525 0 0 1-.22.239c-.11.06-.25.06-.528.06h-8.4c-.28 0-.42 0-.527-.055a.5.5 0 0 1-.218-.218C12 11.62 12 11.48 12 11.2V2.8c0-.278 0-.417.06-.528a.525.525 0 0 1 .239-.22c.115-.05.244-.04.5-.02a10 10 0 0 1 8.44 6.141Z"
    />
  </svg>
);
export default SvgPieChart01;
