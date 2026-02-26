export function AssessmentIcon({
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
        d="M2.91992 15.0033V5.83659C2.91992 2.50326 3.75326 1.66992 7.08659 1.66992H12.9199C16.2533 1.66992 17.0866 2.50326 17.0866 5.83659V14.1699C17.0866 14.2866 17.0866 14.4033 17.0783 14.5199"
        stroke={stroke}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.29492 12.5H17.0866V15.4167C17.0866 17.025 15.7783 18.3333 14.1699 18.3333H5.83659C4.22826 18.3333 2.91992 17.025 2.91992 15.4167V14.875C2.91992 13.5667 3.98659 12.5 5.29492 12.5Z"
        stroke={stroke}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.66992 5.83008H13.3366"
        stroke={stroke}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.66992 8.75H10.8366"
        stroke={stroke}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
