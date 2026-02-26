export function CoursesIcon({
  className,
  width = "18",
  height = "18",
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
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M16.501 12.5523V3.49983C16.501 2.59983 15.766 1.93233 14.8735 2.00733H14.8285C13.2535 2.14233 10.861 2.94483 9.52598 3.78483L9.39848 3.86733C9.18098 4.00233 8.82098 4.00233 8.60348 3.86733L8.41598 3.75483C7.08098 2.92233 4.69598 2.12733 3.12098 1.99983C2.22848 1.92483 1.50098 2.59983 1.50098 3.49233V12.5523C1.50098 13.2723 2.08598 13.9473 2.80598 14.0373L3.02348 14.0673C4.65098 14.2848 7.16348 15.1098 8.60348 15.8973L8.63348 15.9123C8.83598 16.0248 9.15848 16.0248 9.35348 15.9123C10.7935 15.1173 13.3135 14.2848 14.9485 14.0673L15.196 14.0373C15.916 13.9473 16.501 13.2723 16.501 12.5523Z"
        stroke={stroke}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.99609 4.11328V15.3633"
        stroke={stroke}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.81055 6.36426H4.12305"
        stroke={stroke}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.37305 8.61523H4.12305"
        stroke={stroke}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
