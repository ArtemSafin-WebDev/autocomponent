import { SVGProps } from "react";

const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={19}
    viewBox="0 0 18 19"
    fill="none"
    {...props}
  >
    <path
      d="M7.5 3.75a4.25 4.25 0 1 0 0 8.5 4.25 4.25 0 0 0 0-8.5ZM1.25 8a6.25 6.25 0 1 1 12.5 0 6.25 6.25 0 0 1-12.5 0Z"
      clipRule="evenodd"
    />
    <path
      d="M10.543 11.043a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1-1.414 1.414l-4.5-4.5a1 1 0 0 1 0-1.414Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SearchIcon;
