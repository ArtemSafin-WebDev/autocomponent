import { SVGProps } from "react";

const ArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} {...props}>
    <path
      fillRule="evenodd"
      d="M5.95 5.536 3.12 2.707l1.415-1.414 4.243 4.243-4.243 4.242-1.414-1.414 2.828-2.828Z"
      clipRule="evenodd"
    />
  </svg>
);
export default ArrowRight;
