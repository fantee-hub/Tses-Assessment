interface CourseCardProps {
  image: string;
  title: string;
  description: string;
  tag: string;
}

export const CourseCard = ({
  image,
  title,
  description,
  tag,
}: CourseCardProps) => (
  <div className="rounded-xl bg-[#f8f8f8] border border-gray-100 overflow-hidden hover:shadow-sm transition-shadow ease-out">
    <img src={image} alt={title} className="w-full h-40 object-cover" />
    <div className="p-3">
      <h4 className="font-semibold text-[#202020] mb-1">{title}</h4>
      <p className="text-sm text-[#636363] line-clamp-2 mb-6">{description}</p>
      <span className="px-4 py-1 bg-[#E8E8E8] text-[#636363] text-sm rounded-full border border-gray-200">
        {tag}
      </span>
    </div>
  </div>
);
