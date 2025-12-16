import JobCard from "./JobCard.jsx";

export default function JobsRow({ jobs = [] }) {
  if (!jobs.length) {
    return (
      <div className="col-span-full flex flex-col items-center justify-center rounded-xl border border-dashed border-gray-300 bg-gray-50 p-10 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-2xl font-semibold text-blue-600">
          !
        </div>
        <h3 className="text-lg font-semibold text-gray-800">
          No Jobs Found
        </h3>
        <p className="mt-2 max-w-sm text-sm text-gray-500">
          There are no jobs available right now. Try changing your filters or
          check back later.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}
