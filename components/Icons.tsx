type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  logo: (props: IconProps) => (
    <svg
      width="25"
      height="25"
      viewBox="0 0 32 32"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="6" />
      <g opacity="0.8">
        <rect x="8" y="10" width="2" height="12" fill="black" />
        <rect x="12" y="8" width="2" height="16" fill="black" />
        <rect x="16" y="6" width="2" height="20" fill="black" />
        <rect x="20" y="8" width="2" height="16" fill="black" />
        <rect x="24" y="10" width="2" height="12" fill="black" />
      </g>
      <defs>
        <linearGradient
          id="gradient"
          x1="0"
          y1="0"
          x2="32"
          y2="32"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="hsl(var(--primary))" />
          <stop offset="1" stopColor="hsl(var(--primary) / 0.8)" />
        </linearGradient>
      </defs>
    </svg>
  ),
};
