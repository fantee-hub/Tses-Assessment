"use client";

interface CourseHeroBannerProps {
  thumbnail?: string;
  title: string;
}

export const CourseHeroBanner = ({
  thumbnail,
  title,
}: CourseHeroBannerProps) => {
  return (
    <div className="w-full h-69.5 rounded-xl overflow-hidden mb-6 bg-linear-to-br from-teal-400 via-cyan-500 to-blue-600 relative">
      {thumbnail ? (
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
          <div className="absolute -top-8 -left-8 w-40 h-40 rounded-full bg-white/10" />
          <div className="absolute -bottom-12 -right-12 w-56 h-56 rounded-full bg-white/10" />
          <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-white/10" />

          <svg
            className="w-40 h-40 opacity-40"
            viewBox="0 0 160 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="80" cy="80" r="60" fill="white" fillOpacity="0.2" />
            <rect x="50" y="65" width="60" height="8" rx="4" fill="white" />
            <rect x="50" y="81" width="45" height="8" rx="4" fill="white" />
            <rect x="50" y="97" width="52" height="8" rx="4" fill="white" />
          </svg>
        </div>
      )}
    </div>
  );
};
