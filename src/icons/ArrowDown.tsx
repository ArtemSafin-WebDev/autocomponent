import { SVGProps } from "react";

const ArrowDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 8 6"
    fill="none"
    width={8}
    height={6}
    {...props}
  >
    <path d="M4 6 .536.75h6.928L4 6Z" />
  </svg>
);
export default ArrowDown;
