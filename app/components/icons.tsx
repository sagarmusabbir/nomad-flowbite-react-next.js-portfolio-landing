import * as React from "react";
import { IconSvgProps } from "@/app/types";
import { SVGProps } from "react";

import {
  SiElementor,
  SiGhost,
  SiHugo,
  SiNextdotjs,
  SiReact,
  SiWordpress,
} from "react-icons/si";

export const Elementor: React.FC<IconSvgProps> = ({ ...props }) => (
  <SiElementor
    fill="currentColor"
    viewBox="0 0 36 36"
    aria-hidden="true"
    {...props}
  />
);

export const Hugo: React.FC<IconSvgProps> = ({ ...props }) => (
  <SiHugo
    fill="currentColor"
    viewBox="0 0 36 36"
    aria-hidden="true"
    {...props}
  />
);

export const Next: React.FC<IconSvgProps> = ({ ...props }) => (
  <SiNextdotjs
    fill="currentColor"
    viewBox="0 0 36 36"
    aria-hidden="true"
    {...props}
  />
);

export const Ghost: React.FC<IconSvgProps> = ({ ...props }) => (
  <SiGhost
    fill="currentColor"
    viewBox="0 0 36 36"
    aria-hidden="true"
    {...props}
  />
);

export const Boilerplate: React.FC<IconSvgProps> = ({ ...props }) => (
  <SiReact
    fill="currentColor"
    viewBox="0 0 36 36"
    aria-hidden="true"
    {...props}
  />
);

export const Wordpress: React.FC<IconSvgProps> = ({ ...props }) => (
  <SiWordpress
    fill="currentColor"
    viewBox="0 0 36 36"
    aria-hidden="true"
    {...props}
  />
);

export const Logo: React.FC<IconSvgProps> = ({
  size = 36,
  width,
  height,
  ...props
}) => (
  <svg
    fill="none"
    height={size || height}
    viewBox="0 0 32 32"
    width={size || width}
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);
