export function SearchIcon({
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
        d="M9.1665 16.6667C13.3086 16.6667 16.6665 13.3088 16.6665 9.16669C16.6665 5.02455 13.3086 1.66669 9.1665 1.66669C5.02437 1.66669 1.6665 5.02455 1.6665 9.16669C1.6665 13.3088 5.02437 16.6667 9.1665 16.6667Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.7755 17.2407C16.2172 18.574 17.2255 18.7073 18.0005 17.5407C18.7088 16.474 18.2422 15.599 16.9588 15.599C16.0088 15.5907 15.4755 16.3323 15.7755 17.2407Z"
        stroke="#636363"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
