export function ClassesIcon({
  className,
  width = "20",
  height = "20",
  stroke = "#636363",
}: {
  className?: string;
  width?: string;
  height?: string;
  stroke?: string;
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M2.5 8.33659C2.5 5.19389 2.5 3.62255 3.47631 2.64623C4.45262 1.66992 6.02397 1.66992 9.16667 1.66992H10.8333C13.976 1.66992 15.5474 1.66992 16.5237 2.64623C17.5 3.62255 17.5 5.19389 17.5 8.33659V13.3366H2.5V8.33659Z"
        stroke={stroke}
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path
        d="M1.66992 13.3301H18.3366"
        stroke={stroke}
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M3.33008 18.3301L5.83008 13.3301"
        stroke={stroke}
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M16.6699 18.3301L14.1699 13.3301"
        stroke={stroke}
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M10.8366 7.5H9.16992"
        stroke={stroke}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.66341 9.16341V5.83008L5.83008 6.66341"
        stroke={stroke}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.1634 9.16341V5.83008L13.3301 6.66341"
        stroke={stroke}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 16.6634V13.3301"
        stroke={stroke}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
