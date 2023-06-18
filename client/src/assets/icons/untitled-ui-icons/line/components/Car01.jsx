const SvgCar01 = ({ title, titleId, ...props }) => (
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
      d="M5 13h3M2 9l2 1 1.27-3.812c.263-.787.394-1.18.637-1.471a2 2 0 0 1 .803-.578C7.062 4 7.477 4 8.306 4h7.388c.829 0 1.244 0 1.597.139a2 2 0 0 1 .802.578c.243.29.374.684.636 1.471L20 10l2-1m-6 4h3M6.8 10h10.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C22 12.28 22 13.12 22 14.8v2.7c0 .465 0 .697-.038.89a2 2 0 0 1-1.572 1.572c-.193.038-.425.038-.89.038H19a2 2 0 0 1-2-2 .5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5 2 2 0 0 1-2 2h-.5c-.465 0-.697 0-.89-.038a2 2 0 0 1-1.572-1.572C2 18.197 2 17.965 2 17.5v-2.7c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C4.28 10 5.12 10 6.8 10Z"
    />
  </svg>
);
export default SvgCar01;
