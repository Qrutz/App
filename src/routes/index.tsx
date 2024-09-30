import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: () => <Dashboard />,
})


const Dashboard = () => {
  return (
    <div className="flex flex-1">
      <div className="p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-gray-900 flex flex-col gap-2 flex-1 w-full h-full">

        {/* Top Section */}
        <div className="flex gap-2">
          <div
            key={"first-array"}
            className="h-20 w-full rounded-lg bg-gray-100 dark:bg-gray-800 animate-pulse text-gray-400 justify-center items-center text-center align-middle flex"
          >account details and balance mby dont fooking know</div>
        </div>

        {/* Bottom Section with 80/20 split */}
        <div className="flex gap-2 flex-1">

          {/* Left part: 20% of the width */}
          <div
            key={"left-section"}
            className="h-full w-full text-gray-400 flex-[1] rounded-lg bg-gray-100 dark:bg-gray-800 animate-pulse justify-center items-center text-center align-middle flex"
          >Current projects state for user?</div>

          {/* middle part: 60% of the width */}
          <div
            key={"left-section"}
            className="h-full w-full flex-[4] text-gray-400 rounded-lg bg-gray-100 dark:bg-gray-800 animate-pulse justify-center items-center text-center align-middle flex"
          >LIST VIEW</div>

          {/* Right part: 20% of the width with 30/70 split */}
          <div className="flex flex-[1] flex-col gap-2">

            {/* Top part: 30% of the height (ad/featured content) */}
            <div className="h-[30%] rounded-lg bg-gray-100 dark:bg-gray-600 animate-pulse text-gray-400 justify-center items-center text-center align-middle flex">PROMOS?</div>

            {/* Bottom part: 70% of the height (leaderboard or other content) */}
            <div className="h-[70%] rounded-lg text-gray-400 bg-gray-100 dark:bg-gray-800 animate-pulse justify-center items-center text-center align-middle flex">Leaderboard?</div>

          </div>

        </div>
      </div>
    </div>
  );
};