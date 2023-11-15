import { SVGProps } from "react";

const RemoveIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    viewBox="0 0 12 12"
    {...props}
  >
    <path d="m3.112 9.712-.825-.825L5.175 6 2.287 3.112l.825-.825L6 5.175l2.887-2.888.825.825L6.825 6l2.887 2.887-.825.825L6 6.825 3.112 9.712Z" />
  </svg>
);
export default RemoveIcon;
