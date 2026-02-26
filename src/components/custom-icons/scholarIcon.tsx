export function ScholarIcon({
  className,
  width = "24",
  height = "24",
  stroke = "#2CCDF1",
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
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M10.0495 2.5293L4.02953 6.4593C2.09953 7.7193 2.09953 10.5393 4.02953 11.7993L10.0495 15.7293C11.1295 16.4393 12.9095 16.4393 13.9895 15.7293L19.9795 11.7993C21.8995 10.5393 21.8995 7.7293 19.9795 6.4693L13.9895 2.5393C12.9095 1.8193 11.1295 1.8193 10.0495 2.5293Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.63012 13.08L5.62012 17.77C5.62012 19.04 6.60012 20.4 7.80012 20.8L10.9901 21.86C11.5401 22.04 12.4501 22.04 13.0101 21.86L16.2001 20.8C17.4001 20.4 18.3801 19.04 18.3801 17.77V13.13"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.4004 15V9"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
