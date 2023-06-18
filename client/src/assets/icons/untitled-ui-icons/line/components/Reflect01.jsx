const SvgReflect01 = ({ title, titleId, ...props }) => (
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
      d="M12 3v3m0 4.5v3m0 4.5v3M3.288 7.99l4.388 3.376c.28.216.42.324.47.455a.5.5 0 0 1 0 .358c-.05.131-.19.24-.47.455L3.288 16.01c-.414.319-.62.478-.794.476a.5.5 0 0 1-.387-.19C2 16.157 2 15.896 2 15.374v-6.75c0-.522 0-.783.107-.92a.5.5 0 0 1 .387-.19c.173-.002.38.157.794.476Zm17.424 0-4.388 3.376c-.28.216-.42.324-.47.455a.5.5 0 0 0 0 .358c.05.131.19.24.47.455l4.388 3.375c.414.319.62.478.794.476a.5.5 0 0 0 .386-.19c.108-.137.108-.398.108-.92v-6.75c0-.522 0-.783-.108-.92a.5.5 0 0 0-.386-.19c-.173-.002-.38.157-.794.476Z"
    />
  </svg>
);
export default SvgReflect01;
