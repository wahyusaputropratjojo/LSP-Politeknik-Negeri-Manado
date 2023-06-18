const SvgNavigationPointer01 = ({ title, titleId, ...props }) => (
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
      d="M3.413 10.745c-.595-.232-.893-.348-.98-.515a.5.5 0 0 1 0-.461c.087-.167.385-.283.98-.515L20.3 2.664c.537-.21.806-.315.978-.258a.5.5 0 0 1 .316.316c.057.172-.048.44-.258.977l-6.59 16.888c-.232.595-.348.893-.515.98a.5.5 0 0 1-.462 0c-.167-.088-.282-.385-.514-.98l-2.628-6.759a1.075 1.075 0 0 0-.107-.232.5.5 0 0 0-.116-.117c-.051-.036-.112-.06-.232-.106l-6.759-2.628Z"
    />
  </svg>
);
export default SvgNavigationPointer01;
