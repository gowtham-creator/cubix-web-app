import { cn } from "lib/utils";

const SingleDescriptionList = ({
  listItems,
  pointColor,
}: {
  listItems: string[];
  pointColor: string;
}) => {
  return (
    <div className="w-full max-w-3xl  py-8 px-4">
      <ul className="relative">
        {listItems.map((point, index) => (
          <li key={index} className="flex mb-8 relative">
            {/* Number circle with blue background */}
            <div className="relative z-10">
              <div
                className={cn(
                  "flex items-center justify-center  text-white rounded-full w-10 h-10 font-bold",
                  pointColor,
                )}
              >
                {index + 1}
              </div>
            </div>

            {/* Content */}
            <div className="ml-6 mt-1">
              <h3 className="text-lg font-medium">{point}</h3>
            </div>

            {/* Connecting line (except for the last item) */}
            {index < listItems.length - 1 && (
              <div className="absolute top-12 left-5 w-px h-5 bg-gray-400"></div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export { SingleDescriptionList };
