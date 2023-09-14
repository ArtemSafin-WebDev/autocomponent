import { SVGProps } from "react";

const Download = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M5.5 20c-.4 0-.75-.15-1.05-.45-.3-.3-.45-.65-.45-1.05v-3.575h1.5V18.5h13v-3.575H20V18.5c0 .4-.15.75-.45 1.05-.3.3-.65.45-1.05.45h-13Zm6.5-3.825L7.175 11.35l1.075-1.075 3 3V4h1.5v9.275l3-3 1.075 1.075L12 16.175Z" />
  </svg>
);
export default Download;
