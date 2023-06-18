const SvgStar07 = ({ title, titleId, ...props }) => (
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
      d="M22 12h-2m-.929 7.071-1.414-1.414M4 12H2m4.343-5.657L4.929 4.93M12 4V2m5.657 4.343L19.07 4.93M12 22v-2m-7.071-.929 1.414-1.414M12 7l1.545 3.13 3.455.505-2.5 2.435.59 3.44L12 14.885 8.91 16.51l.59-3.44L7 10.635l3.455-.505L12 7Z"
    />
  </svg>
);
export default SvgStar07;
