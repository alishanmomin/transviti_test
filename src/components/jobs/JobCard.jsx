import Card from "../ui/Card.jsx";
import Button from "../ui/Button.jsx";
import { LOCAL_IMAGES } from "../../utils/localImages.js";

export default function JobCard({ job }) {
  return (
    <Card className="px-4 py-4  hover:scale-105 transition">
      <div className="text-xs font-semibold text-slate-500">{job.promoted ? "Promoted" : ""}</div>
      <div className="mt-2 flex gap-3">
        <div className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center text-indigo-600">
          <img className="w-[60%] h-[60%]" src={LOCAL_IMAGES.companyLogo} alt="company"/>
        </div>
        <div className="min-w-0">
          <div className="font-semibold leading-tight">{job.title}</div>
          <div className="text-sm text-slate-500">{job.company}</div>
        </div>
      </div>

      <div className="mt-2 space-y-1 text-sm text-slate-600">
        <div className="flex items-center gap-4">
          <img className="w-3.5" src={LOCAL_IMAGES.locationIcon} />
          <p>
            {job.location}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <img className="w-3.5" src={LOCAL_IMAGES.clockIcon} />
          <p>
            {job.timeAgo} | <span className="text-primary">{job.applicants}</span>
          </p>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <Button className="flex-1">Apply Now</Button>
        <img src={LOCAL_IMAGES.saveIcon} />
      </div>
    </Card>
  );
}
