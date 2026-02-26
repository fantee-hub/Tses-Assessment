export function DashboardIcon({
  className,
  width = "16",
  height = "16",
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
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M6.01594 1.89214L2.4226 4.69214C1.8226 5.15881 1.33594 6.15214 1.33594 6.90547V11.8455C1.33594 13.3921 2.59594 14.6588 4.1426 14.6588H11.8626C13.4093 14.6588 14.6693 13.3921 14.6693 11.8521V6.99881C14.6693 6.19214 14.1293 5.15881 13.4693 4.69881L9.34927 1.81214C8.41594 1.15881 6.91594 1.19214 6.01594 1.89214Z"
        stroke={stroke}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 12H9C10.1 12 11 11.1 11 10V8C11 6.9 10.1 6 9 6H7C5.9 6 5 6.9 5 8V10C5 11.1 5.9 12 7 12Z"
        stroke={stroke}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 6V12"
        stroke={stroke}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 9H11"
        stroke={stroke}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
