"use client";
import { Learner } from "@/src/utils/types";
import { MessageTextIcon } from "@/src/components/custom-icons";

interface AvatarProps {
  src?: string;
  name: string;
}

const Avatar = ({ src, name }: AvatarProps) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  if (src) {
    return (
      <img
        src={src}
        alt={name}
        className="w-10 h-10 rounded-full object-cover"
      />
    );
  }

  return (
    <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-semibold shrink-0">
      {initials}
    </div>
  );
};

interface LearnersCardListProps {
  learners: Learner[];
  onMessageLearner?: (learner: Learner) => void;
}

export const LearnersCardList = ({
  learners,
  onMessageLearner,
}: LearnersCardListProps) => {
  if (learners.length === 0) {
    return (
      <div className="px-4 py-12 text-center text-gray-400 text-sm">
        No learners enrolled yet.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3 p-4">
      {learners.map((learner) => (
        <div
          key={learner.id}
          className="bg-white rounded-xl border border-gray-100 shadow-sm px-4 py-3.5 flex items-center gap-3"
        >
          <Avatar src={learner.avatar} name={learner.name} />

          <div className="flex-1 min-w-0">
            <p className="font-semibold text-gray-800 text-sm truncate">
              {learner.name}
            </p>
            <p className="text-xs text-gray-500 truncate">{learner.email}</p>
            {learner.city && (
              <p className="text-xs text-gray-400 mt-0.5">{learner.city}</p>
            )}
          </div>

          <button
            onClick={() => onMessageLearner?.(learner)}
            className="p-2 rounded-lg hover:bg-blue-50 text-gray-400 hover:text-blue-500 transition-colors shrink-0"
            aria-label={`Message ${learner.name}`}
          >
            <MessageTextIcon />
          </button>
        </div>
      ))}
    </div>
  );
};
