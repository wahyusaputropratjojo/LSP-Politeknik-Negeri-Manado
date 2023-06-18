const SvgMail05 = ({ title, titleId, ...props }) => (
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
      d="m13.744 2.634 7.528 4.893c.266.173.399.26.495.375a1 1 0 0 1 .189.347c.044.144.044.302.044.62V16.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C19.72 21 18.88 21 17.2 21H6.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.31C2 18.72 2 17.88 2 16.2V8.87c0-.318 0-.476.044-.62a1 1 0 0 1 .189-.347c.096-.115.229-.202.495-.375l7.528-4.893m3.488 0c-.631-.41-.947-.616-1.287-.695a2 2 0 0 0-.914 0c-.34.08-.656.285-1.287.695m3.488 0 6.192 4.025c.688.447 1.032.67 1.151.954a1 1 0 0 1 0 .775c-.12.283-.463.507-1.15.954l-6.193 4.025c-.631.41-.947.615-1.287.695-.3.07-.613.07-.914 0-.34-.08-.656-.285-1.287-.695L4.064 9.342c-.688-.447-1.032-.67-1.151-.954a1 1 0 0 1 0-.775c.12-.283.463-.507 1.15-.954l6.193-4.025M21.5 19l-6.643-6m-5.714 0L2.5 19"
    />
  </svg>
);
export default SvgMail05;
