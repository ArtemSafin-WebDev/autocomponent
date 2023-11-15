import { SVGProps } from "react";

const CloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    viewBox="0 0 32 32"
    {...props}
  >
    <path d="m8.3 25.1-1.4-1.4 7.7-7.7-7.7-7.7 1.4-1.4 7.7 7.7 7.7-7.7 1.4 1.4-7.7 7.7 7.7 7.7-1.4 1.4-7.7-7.7-7.7 7.7Z" />
  </svg>
);
export default CloseIcon;
