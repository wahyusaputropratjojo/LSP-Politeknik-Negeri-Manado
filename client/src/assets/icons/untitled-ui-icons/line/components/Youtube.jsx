const SvgYoutube = ({ title, titleId, ...props }) => (
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
      d="M21.581 7.2a2.528 2.528 0 0 0-1.763-1.818C18.254 5 12 5 12 5s-6.254 0-7.818.418A2.527 2.527 0 0 0 2.42 7.236 26.362 26.362 0 0 0 2 12.046c-.01 1.624.13 3.246.418 4.844a2.527 2.527 0 0 0 1.763 1.746c1.564.418 7.818.418 7.818.418s6.254 0 7.818-.418a2.528 2.528 0 0 0 1.763-1.818c.284-1.575.424-3.173.419-4.773A26.36 26.36 0 0 0 21.58 7.2Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.75 9.465c0-.477 0-.716.1-.849a.5.5 0 0 1 .364-.199c.166-.012.367.117.769.375l3.942 2.535c.349.224.523.336.583.478a.5.5 0 0 1 0 .39c-.06.142-.234.254-.583.478l-3.942 2.535c-.402.258-.603.387-.769.375a.5.5 0 0 1-.364-.2c-.1-.132-.1-.371-.1-.848v-5.07Z"
    />
  </svg>
);
export default SvgYoutube;
