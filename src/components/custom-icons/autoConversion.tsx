export function AutoConversionIcon({
  className,
  width = "15",
  height = "15",
  stroke = "#00B000",
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
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M3.09022 5.02543H6.76763M1.25 11.25L4.68601 7.86637C4.81821 7.73619 5.02473 7.7215 5.17379 7.83175L7.82744 9.7945C7.98375 9.91019 8.20181 9.88775 8.33162 9.74269L13.3031 4.18914M11.3178 3.75H13.0816C13.4241 3.75 13.7037 4.02548 13.7107 4.36987L13.75 6.29056"
        stroke={stroke}
        strokeWidth="0.9375"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
