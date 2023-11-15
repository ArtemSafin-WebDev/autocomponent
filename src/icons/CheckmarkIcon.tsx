import { SVGProps } from "react";

const CheckmarkIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={11}
    height={9}
    {...props}
    viewBox="0 0 11 9"
  >
    <path
      fillRule="evenodd"
      d="M4.536 5.777 1.707 2.95.293 4.363l4.243 4.243L10.9 2.242 9.485.828l-4.95 4.95Z"
      clipRule="evenodd"
    />
  </svg>
);
export default CheckmarkIcon;
