const SvgAnnotationHeart = ({ title, titleId, ...props }) => (
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
      d="M3 7.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.28 3 6.12 3 7.8 3h8.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C21 5.28 21 6.12 21 7.8v5.7c0 1.398 0 2.097-.228 2.648a3 3 0 0 1-1.624 1.624C18.597 18 17.898 18 16.5 18c-.489 0-.733 0-.96.053a2 2 0 0 0-.821.412c-.18.149-.326.344-.619.735l-1.46 1.947c-.217.29-.326.434-.459.486a.5.5 0 0 1-.362 0c-.133-.052-.242-.197-.459-.486L9.9 19.2c-.293-.39-.44-.586-.619-.735a2 2 0 0 0-.821-.412C8.233 18 7.989 18 7.5 18c-1.398 0-2.097 0-2.648-.228a3 3 0 0 1-1.624-1.624C3 15.597 3 14.898 3 13.5V7.8Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.997 8.33c-.8-.908-2.133-1.153-3.135-.32-1.002.832-1.143 2.223-.356 3.208.468.585 1.614 1.635 2.466 2.39.352.311.528.467.74.53.18.055.39.055.571 0 .212-.063.388-.219.74-.53.852-.755 1.998-1.805 2.466-2.39a2.256 2.256 0 0 0-.356-3.209c-1.02-.823-2.336-.587-3.136.322Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgAnnotationHeart;
