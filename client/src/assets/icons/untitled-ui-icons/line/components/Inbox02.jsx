const SvgInbox02 = ({ title, titleId, ...props }) => (
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
      d="M2 12h3.882c.685 0 1.312.387 1.618 1 .306.613.933 1 1.618 1h5.764c.685 0 1.312-.387 1.618-1 .306-.613.933-1 1.618-1H22M2 12V8.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C4.28 4 5.12 4 6.8 4h10.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C22 6.28 22 7.12 22 8.8V12M2 12v3.2c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C4.28 20 5.12 20 6.8 20h10.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C22 17.72 22 16.88 22 15.2V12"
    />
  </svg>
);
export default SvgInbox02;
