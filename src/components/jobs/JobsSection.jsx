import JobsRow from "./JobsRow.jsx";
import { featuredJobs, recommendedJobs, latestJobs } from "../../utils/constants.js";
import useJobsFilter from "../../hooks/useJobsFilter.js";
import { LOCAL_IMAGES } from "../../utils/localImages.js";
import { jobTags, jobTypesOptions, locationOptions } from "../../utils/constants.js";

export default function JobsSection() {

  const {
    keyword, setKeyword,
    location, setLocation,
    jobType, setJobType,
    activeTag, setActiveTag,
    filteredFeatured,
    filteredRecommended,
    filteredLatest,
  } = useJobsFilter({ featuredJobs, recommendedJobs, latestJobs });

  return (
    <div className="space-y-6">
      <div className="mt-5">
        <div className="flex flex-col gap-2">
          <div className="text-[22px] leading-7.5 font-bold text-slate-900">
            Find your Dream Job, <span className="text-primary">Ali Shan Momin!</span>
          </div>
          <p className="text-[13px] leading-5 text-slate-500">
            Explore the latest job openings and apply for the best opportunities available today!
          </p>
        </div>

        <div className="w-full py-4">
          <div className="bg-white rounded-xl flex flex-col md:flex-row px-4 md:px-6 py-4 gap-4 md:gap-0 items-stretch md:items-center">
            <div className="flex-1">
              <input
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Job Title, Company, or Keywords"
                className="w-full bg-transparent text-[14px] leading-5 text-slate-700 placeholder:text-slate-400 outline-none"
              />
            </div>
            <div className="hidden md:block mx-6 h-8 w-px bg-slate-200" />
            <div className="w-full md:w-55">
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full bg-transparent text-[14px] leading-5 text-slate-700 outline-none"
              >
                {locationOptions.map((item) => (
                  <option value={item.value} key={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="hidden md:block mx-6 h-8 w-px bg-slate-200" />
            <div className="w-full md:w-35">
              <select
                value={jobType}
                onChange={(e) => setJobType(e.target.value)}
                className="w-full bg-transparent text-[14px] leading-5 text-slate-700 outline-none"
              >
                {jobTypesOptions.map((item) => (
                  <option value={item.value} key={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="button"
              className="mt-2 md:mt-0 md:ml-6 inline-flex h-10 w-full md:w-33 hover:scale-105 transition items-center justify-center gap-2 rounded-xl bg-primary text-[14px] text-white"
            >
              <img src={LOCAL_IMAGES.searchLogo} alt="search" />
              Search
            </button>
          </div>
          <div className="mt-4 border-t border-slate-200">
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-3">
              <span className="text-[12px] sm:text-[13px] font-medium text-slate-500">
                Similar:
              </span>

              {jobTags.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setActiveTag(activeTag === item ? "" : item)}
                  className={[
                    "h-7 sm:h-8 px-3 sm:px-4 text-[11px] sm:text-[12px]",
                    "rounded-md border-2 hover:scale-105 transition font-medium",
                    activeTag === item
                      ? "border-blue-200 text-primary"
                      : "border-slate-300 text-slate-600",
                  ].join(" ")}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="text-lg font-semibold">Featured Jobs</div>
        <a className="text-lg text-primary hover:text-blue-900 underline" href="#">
          See Featured Jobs
        </a>
      </div>
      <JobsRow jobs={filteredFeatured} />

      <div className="flex items-center gap-3">
        <div className="text-lg font-semibold">Recommended Jobs</div>
        <a className="text-lg text-primary hover:text-blue-900 underline" href="#">
          See Recommended Jobs
        </a>
      </div>
      <JobsRow jobs={filteredRecommended} />

      <div className="flex items-center gap-3">
        <div className="text-lg font-semibold">Latest Jobs</div>
        <a className="text-lg text-primary hover:text-blue-900 underline" href="#">
          See Latest Jobs
        </a>
      </div>
      <JobsRow jobs={filteredLatest} />
    </div>
  );
}
