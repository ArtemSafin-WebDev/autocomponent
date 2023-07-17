import { SVGProps } from "react";

const InfoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 18 18"
    fill="none"
    {...props}
  >
    <path
      d="M3.166 3.166A8.227 8.227 0 0 1 9 .75c2.278 0 4.341.924 5.834 2.416A8.226 8.226 0 0 1 17.25 9a8.226 8.226 0 0 1-2.416 5.834A8.226 8.226 0 0 1 9 17.25a8.226 8.226 0 0 1-5.834-2.416A8.226 8.226 0 0 1 .75 9c0-2.278.924-4.341 2.416-5.834Zm6.771 1.897a.938.938 0 1 0-1.875 0 .938.938 0 0 0 1.876 0Zm-1.5 1.687a.75.75 0 0 0 0 1.5V12h-.562a.75.75 0 0 0 0 1.5H10.5a.75.75 0 0 0 0-1.5h-.563V7.5a.75.75 0 0 0-.75-.75h-.75Z"
      clipRule="evenodd"
    />
  </svg>
);
export default InfoIcon;
