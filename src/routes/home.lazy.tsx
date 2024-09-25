import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/home')({
  component: () => <Dashboard />,
})


const Dashboard = () => {
  return (
    <div className="flex flex-1">

      <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
        <div className="flex gap-2">

          <div
            key={"first-array"}
            className="h-20 w-full rounded-lg  bg-gray-100 dark:bg-neutral-800 animate-pulse"
          ></div>

        </div>
        <div className="flex gap-2 flex-1">

          {/* Left part: 80% of the width */}
          <div
            key={"left-section"}
            className="h-full w-full flex-[4] rounded-lg bg-gray-100 dark:bg-neutral-800 animate-pulse"
          ></div>

          {/* Right part: 20% of the width */}
          <div
            key={"right-section"}
            className="h-full w-full flex-[1] rounded-lg bg-gray-100 dark:bg-neutral-800 animate-pulse"
          ></div>

        </div>
      </div>
    </div>
  );
};
