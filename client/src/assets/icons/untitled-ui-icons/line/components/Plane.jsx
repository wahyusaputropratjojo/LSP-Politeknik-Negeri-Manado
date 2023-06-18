const SvgPlane = ({ title, titleId, ...props }) => (
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
      d="M17.745 2.812a2.483 2.483 0 0 1 3.58 3.442l-2.78 2.91c-.217.228-.326.342-.393.476a1 1 0 0 0-.104.379c-.01.149.025.303.096.61l1.728 7.487c.072.316.109.474.097.626a1 1 0 0 1-.11.387c-.072.135-.186.25-.415.479l-.37.37c-.607.606-.91.91-1.22.964a1 1 0 0 1-.77-.181c-.253-.188-.389-.595-.66-1.408l-2.01-6.03-3.345 3.346c-.2.2-.3.3-.367.417a1 1 0 0 0-.117.337c-.022.133-.006.273.025.554l.184 1.653c.03.281.046.421.025.555a1.002 1.002 0 0 1-.118.336c-.067.118-.167.218-.366.418l-.198.197c-.473.473-.71.71-.972.778a1 1 0 0 1-.69-.068c-.244-.119-.43-.397-.8-.954L6.106 18.54c-.066-.1-.1-.15-.138-.195a.999.999 0 0 0-.111-.111c-.045-.039-.095-.072-.194-.138L3.31 16.528c-.557-.371-.835-.557-.954-.801a1 1 0 0 1-.068-.69c.069-.263.305-.499.778-.972l.198-.198c.2-.2.3-.3.417-.366a1 1 0 0 1 .336-.118c.134-.021.274-.006.555.026l1.653.183c.28.031.421.047.555.026a1 1 0 0 0 .336-.118c.118-.067.218-.167.417-.367l3.346-3.345-6.03-2.01c-.813-.27-1.22-.406-1.407-.66a1 1 0 0 1-.182-.77c.055-.31.358-.613.964-1.219l.37-.37c.23-.23.344-.344.48-.415a1 1 0 0 1 .386-.11c.153-.013.31.024.626.097l7.459 1.721c.31.072.465.107.614.097a1 1 0 0 0 .412-.122c.132-.072.242-.187.464-.415l2.71-2.8Z"
    />
  </svg>
);
export default SvgPlane;
