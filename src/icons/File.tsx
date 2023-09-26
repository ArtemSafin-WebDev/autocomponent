import { SVGProps } from "react";

const File = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
    <path d="M7.975 17.75h8.05v-1.5h-8.05v1.5Zm0-4.25h8.05V12h-8.05v1.5ZM5.5 22c-.4 0-.75-.15-1.05-.45-.3-.3-.45-.65-.45-1.05v-17c0-.4.15-.75.45-1.05.3-.3.65-.45 1.05-.45h9.025L20 7.475V20.5c0 .4-.15.75-.45 1.05-.3.3-.65.45-1.05.45h-13Zm8.275-13.85H18.5L13.775 3.5v4.65Z" />
  </svg>
);
export default File;
