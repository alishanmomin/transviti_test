import { useMemo, useState } from "react";
import useDebounce from "./useDebounce.js";

export default function useJobsFilter({ featuredJobs = [], recommendedJobs = [], latestJobs = [] }) {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [activeTag, setActiveTag] = useState("");

  const query = useDebounce(keyword, 250);

  const handleFilterData = (list) =>
    list.filter((j) => {
      // Adding all string values to make it a single large one. Then comparing search query with this. 
      const hay = `${j.title} ${j.company} ${j.location} ${j.jobType} ${j.jobStack}`.toLowerCase();
      const okKeyword = query ? hay.includes(query.toLowerCase()) : true;
      const okLocation = location ? j.location.includes(location) : true;
      const okType = jobType ? hay.includes(jobType.toLowerCase()) : true;
      const okTag = activeTag ? hay.includes(activeTag.toLowerCase()) : true;
      return okKeyword && okLocation && okType && okTag;
    });

  const filteredFeatured = useMemo(() => handleFilterData(featuredJobs), [featuredJobs, query, location, jobType, activeTag]);
  const filteredRecommended = useMemo(() => handleFilterData(recommendedJobs), [recommendedJobs, query, location, jobType, activeTag]);
  const filteredLatest = useMemo(() => handleFilterData(latestJobs), [latestJobs, query, location, jobType, activeTag]);

  return {
    keyword, setKeyword,
    location, setLocation,
    jobType, setJobType,
    activeTag, setActiveTag,
    filteredFeatured,
    filteredRecommended,
    filteredLatest,
  };
}
