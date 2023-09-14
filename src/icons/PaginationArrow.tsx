import { SVGProps } from "react";

const PaginationArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} {...props}>
    <path d="m10 16.665-.875-.895 5.146-5.146H3.332v-1.25h10.938L9.125 4.228 10 3.332l6.666 6.667L10 16.665Z" />
  </svg>
);
export default PaginationArrow;
