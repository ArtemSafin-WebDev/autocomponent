import { SVGProps } from "react";

const Camera = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
    <rect width={16} height={11} y={3} rx={2} />
    <rect width={8} height={11} x={4} y={1} rx={2} />
    <circle cx={8} cy={8} r={3} fill="none" stroke="#fff" strokeWidth={2} />
    <circle cx={14} cy={5} r={1} fill="#fff" />
  </svg>
);
export default Camera;
