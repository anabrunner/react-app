import * as React from "react";
const CameraSVGComponent = (props) => (
  <svg
    fill="#000000"
    width="50px"
    height="50px"
    viewBox="0 0 2.25 2.25"
    preserveAspectRatio="xMidYMid meet"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <title>{"camera-solid"}</title>
    <path
      d="M2 0.5h-0.456l-0.066 -0.17A0.125 0.125 0 0 0 1.361 0.25h-0.472a0.125 0.125 0 0 0 -0.117 0.08L0.706 0.5H0.25a0.125 0.125 0 0 0 -0.125 0.125v1.25a0.125 0.125 0 0 0 0.125 0.125h1.75a0.125 0.125 0 0 0 0.125 -0.125V0.625a0.125 0.125 0 0 0 -0.125 -0.125M0.386 0.852a0.05 0.05 0 0 1 0 -0.1h0.15a0.05 0.05 0 0 1 0 0.1ZM1.125 1.75a0.563 0.563 0 1 1 0.563 -0.563 0.563 0.563 0 0 1 -0.563 0.563"
      className="clr-i-solid clr-i-solid-path-1"
    />
    <path
      d="M0.694 1.191a0.442 0.442 0 0 0 0.257 0.401l0.068 -0.109a0.313 0.313 0 1 1 0.326 -0.524l0.068 -0.11a0.441 0.441 0 0 0 -0.719 0.343"
      className="clr-i-solid clr-i-solid-path-2"
    />
    <path
      x={0}
      y={0}
      width={36}
      height={36}
      fillOpacity={0}
      d="M0 0H2.25V2.25H0V0z"
    />
  </svg>
);
export default CameraSVGComponent;
